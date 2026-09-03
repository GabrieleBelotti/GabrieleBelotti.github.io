document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- Mobile nav ---------------- */
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('site-nav');

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

/* ---------------- Language switch ---------------- */
const LANG_KEY = 'gb-site-lang';

const META = {
  it: {
    flag: "🇮🇹",
    code: "IT"
  },
  en: {
    flag: "🇬🇧",
    code: "EN"
  }
};

const langToggle = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');
const langFlag = document.getElementById('langFlag');
const langCode = document.getElementById('langCode');
const metaDescription = document.querySelector('meta[name="description"]');

function applyLang(lang) {
  if (lang !== 'it' && lang !== 'en') lang = 'en';

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  const titleIt = document.querySelector('title[data-it]');
  if (titleIt) {
    document.title = lang === 'it' ? titleIt.dataset.it : titleIt.dataset.en;
  }
  if (metaDescription && metaDescription.dataset.it) {
    metaDescription.setAttribute('content', lang === 'it' ? metaDescription.dataset.it : metaDescription.dataset.en);
  }

  langFlag.textContent = META[lang].flag;
  langCode.textContent = META[lang].code;

  langMenu.querySelectorAll('li').forEach(li => {
    li.setAttribute('aria-selected', String(li.dataset.value === lang));
  });

  document.querySelectorAll('[data-alt-it]').forEach(el => {
    el.setAttribute('alt', lang === 'it' ? el.dataset.altIt : el.dataset.altEn);
  });

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

function openLangMenu() {
  langMenu.classList.add('open');
  langToggle.setAttribute('aria-expanded', 'true');
}
function closeLangMenu() {
  langMenu.classList.remove('open');
  langToggle.setAttribute('aria-expanded', 'false');
}

langToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = langMenu.classList.contains('open');
  isOpen ? closeLangMenu() : openLangMenu();
});

langMenu.querySelectorAll('[data-lang-choice]').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.langChoice);
    closeLangMenu();
    langToggle.focus();
  });
});

document.addEventListener('click', (e) => {
  if (!langMenu.contains(e.target) && e.target !== langToggle) closeLangMenu();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLangMenu();
});

/* Sync UI with whatever the blocking head-script already set on <html> (defaults to English) */
applyLang(document.documentElement.getAttribute('data-lang') || 'en');
