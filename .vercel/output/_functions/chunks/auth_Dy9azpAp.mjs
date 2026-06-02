const prerender = false;
async function POST({ request, cookies }) {
  try {
    const data = await request.json();
    const { password } = data;
    const correctPassword = process.env.GALLERY_PASSWORD || "admin";
    if (password === correctPassword) {
      cookies.set("gallery_session", "authenticated_secret_session_token", {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7
        // Aktif selama 1 minggu
      });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: false, message: "Password salah!" }), {
      status: 401,
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
