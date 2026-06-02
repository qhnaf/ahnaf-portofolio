import { del } from '@vercel/blob';
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
    const { url } = await request.json();
    if (!url) {
      return new Response(JSON.stringify({ success: false, message: "URL required" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const hasBlobToken = !!(process.env.BLOB_READ_WRITE_TOKEN || import.meta.env.BLOB_READ_WRITE_TOKEN);
    const dbUrl = process.env.DATABASE_URL || import.meta.env.DATABASE_URL;
    const isDbConnected = !!dbUrl;

    // 1. HAPUS DARI POSTGRESQL JIKA TERSEDIA
    if (isDbConnected) {
      const sql = postgres(dbUrl, { ssl: 'require' });
      await sql`
        DELETE FROM photos 
        WHERE url = ${url};
      `;
      await sql.end();
    }

    // 2. HAPUS FILE FISIKNYA
    if (hasBlobToken) {
      // MODE PRODUKSI: Hapus dari Vercel Blob
      await del(url);
    } else {
      // MODE SIMULASI LOKAL: Hapus file dari folder lokal
      if (url.startsWith('/gallery-simulated/')) {
        const filename = url.replace('/gallery-simulated/', '');
        const localPath = path.join(process.cwd(), 'public', 'gallery-simulated', filename);
        
        if (fs.existsSync(localPath)) {
          fs.unlinkSync(localPath);
        }
      }
    }

    return new Response(JSON.stringify({ success: true }), { 
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
