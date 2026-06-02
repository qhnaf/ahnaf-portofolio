import { put } from '@vercel/blob';
import postgres from 'postgres';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = false;

export async function POST({ request, cookies }) {
  // Verifikasi session cookie
  const session = cookies.get("gallery_session")?.value;
  if (session !== "authenticated_secret_session_token") {
    return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { 
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return new Response(JSON.stringify({ success: false, message: "File tidak ditemukan" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const extension = file.name.split('.').pop() || 'jpg';
    const randomName = `${crypto.randomUUID()}.${extension}`;
    const filename = `gallery/${randomName}`;

    // Cek token Vercel Blob & Koneksi DB
    const hasBlobToken = !!(process.env.BLOB_READ_WRITE_TOKEN || import.meta.env.BLOB_READ_WRITE_TOKEN);
    const dbUrl = process.env.DATABASE_URL || import.meta.env.DATABASE_URL;
    const isDbConnected = !!dbUrl;

    let finalUrl = '';

    if (hasBlobToken) {
      // MODE PRODUKSI: Unggah ke Vercel Blob Storage
      const blob = await put(filename, file, {
        access: 'public',
      });
      finalUrl = blob.url;
    } else {
      // MODE SIMULASI LOKAL: Simpan file di local public folder
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const localDir = path.join(process.cwd(), 'public', 'gallery-simulated');
      if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir, { recursive: true });
      }

      const localPath = path.join(localDir, randomName);
      fs.writeFileSync(localPath, buffer);

      finalUrl = `/gallery-simulated/${randomName}`;
    }

    // SIMPAN METADATA KE POSTGRESQL JIKA TERSEDIA
    if (isDbConnected) {
      const sql = postgres(dbUrl, { ssl: 'require' });
      await sql`
        INSERT INTO photos (url) 
        VALUES (${finalUrl})
        ON CONFLICT (url) DO NOTHING;
      `;
      await sql.end();
    }

    return new Response(JSON.stringify({ success: true, url: finalUrl }), { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
