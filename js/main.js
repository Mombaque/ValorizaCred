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

// 4. Formulário de leads — mock até existir API real
const leadForm = document.querySelector('#lead-form');
const leadFormMessage = document.querySelector('#lead-form-message');

function onlyDigits(value) {
  return value.replace(/\D/g, '');
}

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);

  return {
    source: params.get('utm_source') || '',
    medium: params.get('utm_medium') || '',
    campaign: params.get('utm_campaign') || '',
  };
}

function setFieldValidity(field, isValid) {
  field.classList.toggle('is-invalid', !isValid);
  field.setAttribute('aria-invalid', String(!isValid));
}

function setFormMessage(text, type) {
  if (!leadFormMessage) return;

  leadFormMessage.textContent = text;
  leadFormMessage.classList.toggle('is-success', type === 'success');
  leadFormMessage.classList.toggle('is-error', type === 'error');
}

async function submitLeadMock(payload) {
  console.log('Lead mock:', payload);

  await new Promise(resolve => setTimeout(resolve, 850));

  return { ok: true, leadId: 'mock' };
}

if (leadForm) {
  const submitButton = leadForm.querySelector('button[type="submit"]');

  leadForm.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const name = String(formData.get('name') || '').trim();
    const phone = onlyDigits(String(formData.get('phone') || ''));
    const profile = String(formData.get('profile') || '');
    const state = String(formData.get('state') || '');
    const creditAmount = String(formData.get('creditAmount') || 'nao_sei');
    const consent = formData.get('consent') === 'on';
    const honeypot = String(formData.get('company') || '').trim();

    const nameField = leadForm.querySelector('#lead-name');
    const phoneField = leadForm.querySelector('#lead-phone');
    const profileField = leadForm.querySelector('#lead-profile');
    const stateField = leadForm.querySelector('#lead-state');
    const consentField = leadForm.querySelector('#lead-consent');

    const validations = [
      [nameField, name.length >= 3],
      [phoneField, phone.length >= 10],
      [profileField, Boolean(profile)],
      [stateField, Boolean(state)],
      [consentField, consent],
    ];

    validations.forEach(([field, isValid]) => setFieldValidity(field, isValid));

    if (honeypot) return;

    if (validations.some(([, isValid]) => !isValid)) {
      setFormMessage('Revise os campos destacados para solicitar sua simulação.', 'error');
      return;
    }

    const payload = {
      name,
      phone,
      profile,
      state,
      creditAmount,
      consent,
      source: 'landing_page',
      pageUrl: window.location.href,
      referrer: document.referrer,
      utm: getUtmParams(),
    };

    try {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      setFormMessage('', '');

      await submitLeadMock(payload);

      leadForm.reset();
      validations.forEach(([field]) => setFieldValidity(field, true));
      setFormMessage('Recebemos seus dados. Um especialista vai chamar você pelo WhatsApp.', 'success');
    } catch (error) {
      setFormMessage('Não foi possível enviar. Tente novamente ou chame no WhatsApp.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Solicitar simulação gratuita';
    }
  });
}
