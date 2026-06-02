import { del } from '@vercel/blob';
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
    const { url } = await request.json();
    if (!url) {
      return new Response(JSON.stringify({ success: false, message: "URL required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const hasBlobToken = !!(process.env.BLOB_READ_WRITE_TOKEN || undefined                                     );
    const dbUrl = process.env.DATABASE_URL || "";
    const isDbConnected = !!dbUrl;
    if (isDbConnected) {
      const sql = postgres(dbUrl, { ssl: "require" });
      await sql`
        DELETE FROM photos 
        WHERE url = ${url};
      `;
      await sql.end();
    }
    if (hasBlobToken) {
      await del(url);
    } else {
      if (url.startsWith("/gallery-simulated/")) {
        const filename = url.replace("/gallery-simulated/", "");
        const localPath = nodePath.join(process.cwd(), "public", "gallery-simulated", filename);
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
