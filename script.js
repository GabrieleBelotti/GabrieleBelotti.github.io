document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- Mobile nav ---------------- */
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------- Remember language choice for the root redirect ---------------- */
/* Each localised page sets data-lang on <html>; store it so / can send repeat
   visitors straight to the version they last used. */
try {
  const lang = document.documentElement.getAttribute('lang');
  if (lang === 'it' || lang === 'en') localStorage.setItem('gb-site-lang', lang);
} catch (e) {}
