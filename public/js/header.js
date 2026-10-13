document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMenu = () => {
    hamburger?.classList.toggle('active');
    mobileMenu?.classList.toggle('active');
    document.body.style.overflow = mobileMenu?.classList.contains('active') ? 'hidden' : 'auto';
  };

  hamburger?.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      mobileMenu?.classList.remove('active');
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 100);
    });
  });

  const themeBtn = document.getElementById('theme-toggle');
  themeBtn?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  const header = document.querySelector('.main-header');
  let headerTicking = false;

  const handleScrollHeader = () => {
    if (!headerTicking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          header?.classList.add('scrolled');
        } else {
          header?.classList.remove('scrolled');
        }
        headerTicking = false;
      });
      headerTicking = true;
    }
  };
  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  let navTicking = false;

  const handleNavHighlight = () => {
    if (!navTicking) {
      window.requestAnimationFrame(() => {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= (sectionTop - 120)) {
            current = section.getAttribute('id') || '';
          }
        });
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href === `#${current}`) {
            link.classList.add('active');
          }
        });
        navTicking = false;
      });
      navTicking = true;
    }
  };
  window.addEventListener('scroll', handleNavHighlight, { passive: true });
  handleNavHighlight();
});
