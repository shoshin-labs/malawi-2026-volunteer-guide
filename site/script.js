const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');
const navBackdrop = document.querySelector('[data-nav-close]');

function setMenu(open) {
  if (!navToggle || !navLinks) return;
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  const label = navToggle.querySelector('.nav-toggle-label');
  if (label) label.textContent = open ? 'Close menu' : 'Open menu';
  if (navBackdrop) navBackdrop.hidden = !open;
  document.body.classList.toggle('menu-open', open);
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    setMenu(!navLinks.classList.contains('open'));
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  navBackdrop?.addEventListener('click', () => setMenu(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

const checklist = document.querySelector('[data-checklist]');
const storagePrefix = 'malawi-2026-check-';

if (checklist) {
  checklist.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    const key = input.dataset.key;
    if (!key) return;
    input.checked = localStorage.getItem(storagePrefix + key) === 'true';
    input.addEventListener('change', () => {
      localStorage.setItem(storagePrefix + key, String(input.checked));
    });
  });
}
