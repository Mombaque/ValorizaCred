// ============================================================
// main.js — Valoriza Cred
// ============================================================

// 1. Smooth scroll para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// 2. Revelar elementos ao fazer scroll (IntersectionObserver)
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target); // dispara só uma vez
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 3. Sticky CTA — ocultar quando o hero está visível, exibir depois
const hero = document.querySelector('#hero');
const stickyCta = document.querySelector('.sticky-cta');

if (hero && stickyCta) {
  const heroObserver = new IntersectionObserver(([entry]) => {
    stickyCta.classList.toggle('sticky-cta--hidden', entry.isIntersecting);
  }, { threshold: 0.1 });

  heroObserver.observe(hero);
}
