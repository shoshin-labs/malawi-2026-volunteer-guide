const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
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
