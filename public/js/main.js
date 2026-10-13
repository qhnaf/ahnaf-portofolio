document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  let ticking = false;

  const revealOnScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        for (let i = 0; i < revealElements.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = revealElements[i].getBoundingClientRect().top;
          const elementVisible = 80;

          if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('load', revealOnScroll);
  window.addEventListener('scroll', revealOnScroll, { passive: true });
});
