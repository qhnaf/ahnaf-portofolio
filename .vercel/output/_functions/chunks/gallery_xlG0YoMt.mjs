import { c as createComponent } from './astro-component_BCkG7jLL.mjs';
import 'piccolore';
import { k as createRenderInstruction, p as maybeRenderHead, u as renderTemplate, q as renderComponent, t as renderSlot, s as renderHead, j as addAttribute } from './entrypoint_BafcW3vQ.mjs';
import 'clsx';
import postgres from 'postgres';
import fs from 'node:fs';
import nodePath from 'node:path';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="main-header" data-astro-cid-3ef6ksr2> <!-- Top Header Bar --> <div class="container header-container" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="#" class="logo" data-astro-cid-3ef6ksr2>
AHNAF<span class="dot" data-astro-cid-3ef6ksr2>.</span> </a> <!-- Desktop Navigation --> <nav class="desktop-nav" data-astro-cid-3ef6ksr2> <ul class="nav-links" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="#about" class="nav-link" data-astro-cid-3ef6ksr2>ABOUT</a></li> <li data-astro-cid-3ef6ksr2><a href="#skills" class="nav-link" data-astro-cid-3ef6ksr2>SKILLS</a></li> <li data-astro-cid-3ef6ksr2><a href="#projects" class="nav-link" data-astro-cid-3ef6ksr2>PROJECTS</a></li> <li data-astro-cid-3ef6ksr2><a href="#experience" class="nav-link" data-astro-cid-3ef6ksr2>EXPERIENCE</a></li> <li data-astro-cid-3ef6ksr2><a href="#certifications" class="nav-link" data-astro-cid-3ef6ksr2>CERTS</a></li> <li data-astro-cid-3ef6ksr2><a href="#contact" class="nav-link" data-astro-cid-3ef6ksr2>CONTACT</a></li> </ul> </nav> <!-- Header Actions --> <div class="header-actions" data-astro-cid-3ef6ksr2> <!-- Theme Switcher button --> <button id="theme-toggle" class="brutalist-theme-btn" aria-label="Toggle theme" data-astro-cid-3ef6ksr2>
THEME
</button> <!-- Hamburger Menu Button (Mobile) --> <button id="mobile-menu-toggle" class="hamburger" aria-label="Toggle menu" data-astro-cid-3ef6ksr2> <span class="bar" data-astro-cid-3ef6ksr2></span> <span class="bar" data-astro-cid-3ef6ksr2></span> <span class="bar" data-astro-cid-3ef6ksr2></span> </button> </div> </div> </header> <!-- Mobile Navigation Overlay (Relocated outside header for perfect fullscreen fixed stacking context) --> <div id="mobile-menu" class="mobile-menu-overlay" data-astro-cid-3ef6ksr2> <nav class="mobile-nav" data-astro-cid-3ef6ksr2> <ul class="mobile-links" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="#" class="mobile-link" data-astro-cid-3ef6ksr2>HOME</a></li> <li data-astro-cid-3ef6ksr2><a href="#about" class="mobile-link" data-astro-cid-3ef6ksr2>ABOUT</a></li> <li data-astro-cid-3ef6ksr2><a href="#skills" class="mobile-link" data-astro-cid-3ef6ksr2>SKILLS</a></li> <li data-astro-cid-3ef6ksr2><a href="#projects" class="mobile-link" data-astro-cid-3ef6ksr2>PROJECTS</a></li> <li data-astro-cid-3ef6ksr2><a href="#experience" class="mobile-link" data-astro-cid-3ef6ksr2>EXPERIENCE</a></li> <li data-astro-cid-3ef6ksr2><a href="#certifications" class="mobile-link" data-astro-cid-3ef6ksr2>CERTIFICATIONS</a></li> <li data-astro-cid-3ef6ksr2><a href="#contact" class="mobile-link" data-astro-cid-3ef6ksr2>CONTACT</a></li> </ul> </nav> </div> <!-- Divider Line --> <div class="brutalist-divider" data-astro-cid-3ef6ksr2></div> <!-- Secondary Ticker Sub-Header (Matches reference screenshot) --> <div class="ticker-subheader" data-astro-cid-3ef6ksr2> <div class="ticker-container" data-astro-cid-3ef6ksr2> <div class="ticker-item" data-astro-cid-3ef6ksr2>FRONTEND DEV</div> <div class="ticker-item" data-astro-cid-3ef6ksr2>WILLING TO LEARN</div> <div class="ticker-item" data-astro-cid-3ef6ksr2>WEB</div> <div class="ticker-item" data-astro-cid-3ef6ksr2>ASTROJS</div> <div class="ticker-item" data-astro-cid-3ef6ksr2>PORTFOLIO</div> <div class="ticker-item" data-astro-cid-3ef6ksr2>OPEN TO WORK</div> </div> </div> <!-- Divider Line Under Ticker --> <div class="brutalist-divider" data-astro-cid-3ef6ksr2></div>  ${renderScript($$result, "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <!-- Divider Line --> <div class="brutalist-divider" data-astro-cid-sz7xmlte></div> <div class="container footer-container" data-astro-cid-sz7xmlte> <!-- Left Info Credits --> <div class="footer-left" data-astro-cid-sz7xmlte> <p class="copyright" data-astro-cid-sz7xmlte>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} <span class="owner" data-astro-cid-sz7xmlte>AHNAF BHAMAKERTI ARIEF</span>. PROPERTY OF AHNAF.
</p> <p class="tech-credit" data-astro-cid-sz7xmlte>
BUILT WITH <a href="https://astro.build" target="_blank" rel="noopener noreferrer" class="footer-link" data-astro-cid-sz7xmlte>ASTROJS</a> &amp; VANILLA CSS.
</p> </div> <!-- Right: Back To Top trigger --> <div class="footer-right" data-astro-cid-sz7xmlte> <button id="scroll-to-top" class="back-to-top-btn" aria-label="Kembali ke atas" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>BACK TO TOP</span> <span class="btn-arrow" data-astro-cid-sz7xmlte>&uarr;</span> </button> </div> </div> </footer>  ${renderScript($$result, "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Ahnaf | Neo-Brutalist Developer Portfolio",
    description = "Selamat datang di portofolio digital Ahnaf. Web developer dengan konsep Neo-Brutalist Sage Green yang ramping, interaktif, dan berperforma tinggi."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="id"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.png?v=1.2"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="/og-image.png"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"', '><meta property="twitter:description"', `><meta property="twitter:image" content="/og-image.png"><!-- Theme Inline Script to avoid page flashing --><script>
      const getTheme = () => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      };

      const theme = getTheme();
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    <\/script>`, "</head> <body> <!-- Global Header --> ", " <!-- Main Content --> <main> ", " </main> <!-- Global Footer --> ", " <!-- Scroll Reveal Logic --> ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/layouts/Layout.astro", void 0);

const prerender = false;
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Gallery;
  const isAuthenticated = Astro2.cookies.get("gallery_session")?.value === "authenticated_secret_session_token";
  let images = [];
  let errorMsg = null;
  const dbUrl = process.env.DATABASE_URL || "";
  const isDbConnected = !!dbUrl;
  if (isAuthenticated) {
    try {
      if (isDbConnected) {
        const sql = postgres(dbUrl, { ssl: "require" });
        const rows = await sql`
        SELECT url, created_at 
        FROM photos 
        ORDER BY created_at DESC;
      `;
        images = rows.map((row) => ({
          url: row.url,
          uploadedAt: row.created_at
        }));
        await sql.end();
      } else {
        const localDir = nodePath.join(process.cwd(), "public", "gallery-simulated");
        if (fs.existsSync(localDir)) {
          const files = fs.readdirSync(localDir);
          images = files.filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file)).map((file) => {
            const stats = fs.statSync(nodePath.join(localDir, file));
            return {
              url: `/gallery-simulated/${file}`,
              pathname: `gallery-simulated/${file}`,
              uploadedAt: stats.mtime
            };
          }).sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
        }
      }
    } catch (err) {
      console.error("Gagal mengambil daftar foto:", err);
      errorMsg = "Gagal memuat galeri foto: " + err.message;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallery | Private Vault", "description": "Galeri foto privat terproteksi sandi.", "data-astro-cid-sahthylw": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="ambient-glows" data-astro-cid-sahthylw> <div class="glow-sphere sphere-teal" data-astro-cid-sahthylw></div> <div class="glow-sphere sphere-violet" data-astro-cid-sahthylw></div> </div> <section class="gallery-section" data-astro-cid-sahthylw> ${!isAuthenticated ? (
    /* --- SCREEN LOGIN (LOCKSCREEN) --- */
    renderTemplate`<div class="lockscreen-container" data-astro-cid-sahthylw> <div class="lockscreen-card glass-card" data-astro-cid-sahthylw> <div class="lock-icon-wrapper" data-astro-cid-sahthylw> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lock-icon" data-astro-cid-sahthylw> <rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-astro-cid-sahthylw></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4" data-astro-cid-sahthylw></path> </svg> </div> <h2 class="lock-title" data-astro-cid-sahthylw>07 / PRIVATE VAULT</h2> <p class="lock-subtitle" data-astro-cid-sahthylw>Masukkan kata sandi untuk mengakses galeri foto privat.</p> <form id="loginForm" class="lock-form" data-astro-cid-sahthylw> <div class="input-group" data-astro-cid-sahthylw> <input type="password" id="passwordInput" placeholder="Ketik kata sandi..." required autocomplete="current-password" data-astro-cid-sahthylw> <div class="input-line" data-astro-cid-sahthylw></div> </div> <div id="loginError" class="error-message" data-astro-cid-sahthylw></div> <button type="submit" class="btn-login glass-btn" data-astro-cid-sahthylw>
MASUK
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sahthylw> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-sahthylw></line> <polyline points="12 5 19 12 12 19" data-astro-cid-sahthylw></polyline> </svg> </button> </form> </div> </div>`
  ) : (
    /* --- SCREEN UTAMA GALERI PRIVAT --- */
    renderTemplate`<div class="gallery-container" data-astro-cid-sahthylw> <div class="gallery-header scroll-reveal active" data-astro-cid-sahthylw> <div class="header-left" data-astro-cid-sahthylw> <h1 class="gallery-title" data-astro-cid-sahthylw>07 / PRIVATE VAULT</h1> <p class="gallery-subtitle" data-astro-cid-sahthylw>
Galeri foto dan dokumentasi privat Ahnaf.
${isDbConnected ? renderTemplate`<span class="mode-badge db" data-astro-cid-sahthylw>PostgreSQL</span>` : renderTemplate`<span class="mode-badge" data-astro-cid-sahthylw>Simulasi Lokal</span>`} </p> </div> <button id="btnLogout" class="btn-logout glass-btn" data-astro-cid-sahthylw>
LOGOUT
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sahthylw> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-sahthylw></path> <polyline points="16 17 21 12 16 7" data-astro-cid-sahthylw></polyline> <line x1="21" y1="12" x2="9" y2="12" data-astro-cid-sahthylw></line> </svg> </button> </div> ${errorMsg && renderTemplate`<div class="error-banner" data-astro-cid-sahthylw>${errorMsg}</div>`} <!-- Panel Upload Area --> <div class="upload-panel glass-card scroll-reveal active" data-astro-cid-sahthylw> <h3 class="panel-title" data-astro-cid-sahthylw>Unggah Foto Baru</h3> <form id="uploadForm" class="upload-form" data-astro-cid-sahthylw> <label class="drop-zone" id="dropZone" data-astro-cid-sahthylw> <input type="file" id="fileInput" name="file" accept="image/*" required style="display: none;" data-astro-cid-sahthylw> <div class="drop-zone-content" data-astro-cid-sahthylw> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="upload-icon" data-astro-cid-sahthylw> <rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-sahthylw></rect> <circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-sahthylw></circle> <polyline points="21 15 16 10 5 21" data-astro-cid-sahthylw></polyline> </svg> <span class="drop-text" id="dropText" data-astro-cid-sahthylw>Klik atau Seret file foto ke sini</span> <span class="file-info" id="fileInfo" data-astro-cid-sahthylw>Mendukung format JPG, PNG, WEBP, GIF</span> </div> </label> <div id="uploadFeedback" class="upload-feedback" data-astro-cid-sahthylw></div> <button type="submit" id="btnUploadSubmit" class="btn-upload glass-btn" disabled data-astro-cid-sahthylw>
UNGGAH FOTO
</button> </form> </div> <!-- Grid Foto --> <div class="photos-grid scroll-reveal active" data-astro-cid-sahthylw> ${images.length === 0 ? renderTemplate`<div class="empty-state glass-card" data-astro-cid-sahthylw> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sahthylw> <rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-sahthylw></rect> <line x1="8.5" y1="8.5" x2="8.51" y2="8.5" data-astro-cid-sahthylw></line> <path d="M21 15l-5-5L5 21" data-astro-cid-sahthylw></path> </svg> <p data-astro-cid-sahthylw>Belum ada foto yang diunggah.</p> </div>` : images.map((img) => renderTemplate`<div class="photo-card glass-card"${addAttribute(img.url, "data-url")} data-astro-cid-sahthylw> <div class="img-wrapper" data-astro-cid-sahthylw> <img${addAttribute(img.url, "src")} alt="Gallery Photo" loading="lazy" class="gallery-img" data-astro-cid-sahthylw> </div> <div class="card-footer" data-astro-cid-sahthylw> <span class="date-text" data-astro-cid-sahthylw> ${new Date(img.uploadedAt).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })} </span> <button class="btn-delete"${addAttribute(img.url, "data-url")} title="Hapus Foto" data-astro-cid-sahthylw> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sahthylw> <polyline points="3 6 5 6 21 6" data-astro-cid-sahthylw></polyline> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-astro-cid-sahthylw></path> <line x1="10" y1="11" x2="10" y2="17" data-astro-cid-sahthylw></line> <line x1="14" y1="11" x2="14" y2="17" data-astro-cid-sahthylw></line> </svg> </button> </div> </div>`)} </div> </div>`
  )} </section>  <div id="lightbox" class="lightbox-modal" data-astro-cid-sahthylw> <button class="lightbox-close" id="lightboxClose" data-astro-cid-sahthylw>&times;</button> <div class="lightbox-content" data-astro-cid-sahthylw> <img id="lightboxImg" src="" alt="Lightbox Preview" data-astro-cid-sahthylw> </div> </div> ` })}  ${renderScript($$result, "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/pages/gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/pages/gallery.astro", void 0);
const $$file = "C:/Users/DELL/Documents/Grind/ahnaf-portofolio/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
