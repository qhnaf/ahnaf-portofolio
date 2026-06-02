import { put } from '@vercel/blob';
import postgres from 'postgres';
import fs from 'node:fs';
import nodePath from 'node:path';

const prerender = false;
async function POST({ request, cookies }) {
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
    const extension = file.name.split(".").pop() || "jpg";
    const randomName = `${crypto.randomUUID()}.${extension}`;
    const filename = `gallery/${randomName}`;
    const hasBlobToken = !!(process.env.BLOB_READ_WRITE_TOKEN || undefined                                     );
    const dbUrl = process.env.DATABASE_URL || "";
    const isDbConnected = !!dbUrl;
    let finalUrl = "";
    if (hasBlobToken) {
      const blob = await put(filename, file, {
        access: "public"
      });
      finalUrl = blob.url;
    } else {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const localDir = nodePath.join(process.cwd(), "public", "gallery-simulated");
      if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir, { recursive: true });
      }
      const localPath = nodePath.join(localDir, randomName);
      fs.writeFileSync(localPath, buffer);
      finalUrl = `/gallery-simulated/${randomName}`;
    }
    if (isDbConnected) {
      const sql = postgres(dbUrl, { ssl: "require" });
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
