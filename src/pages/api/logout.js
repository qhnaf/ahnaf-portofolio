export const prerender = false;

export async function POST({ cookies }) {
  // Hapus cookie session
  cookies.delete("gallery_session", { path: "/" });
  
  return new Response(JSON.stringify({ success: true }), { 
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
