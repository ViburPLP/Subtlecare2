const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollWithOffset(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const header = document.querySelector('.site-header');
  const offset = header ? header.offsetHeight + 16 : 72;
  const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const scrollTo = elementPosition - offset;
  window.scrollTo({ top: scrollTo, behavior: 'smooth' });
}

function setupNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navButtons = document.querySelectorAll('[data-scroll]');

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader);

  navButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = button.getAttribute('data-scroll');
      if (!id) return;
      event.preventDefault();
      scrollWithOffset(id);
      if (mobileMenu && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        mobileMenu.style.display = 'none';
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileToggle?.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle?.querySelector('use');
        if (icon) {
          icon.setAttribute('href', '#icon-menu');
        }
      }
    });
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      mobileMenu.style.display = isOpen ? 'flex' : 'none';
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = mobileToggle.querySelector('use');
      if (icon) {
        icon.setAttribute('href', isOpen ? '#icon-x' : '#icon-menu');
      }
    });
  }
}

function animateCounter(element) {
  const endValue = Number(element.dataset.counter || '0');
  const prefix = element.dataset.prefix || '';
  if (prefersReducedMotion) {
    element.textContent = `${prefix}${endValue.toLocaleString()}+`;
    return;
  }

  const duration = 1000;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * endValue);
    element.textContent = `${prefix}${value.toLocaleString()}+`;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function setupCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupProcessSteps() {
  const steps = document.querySelectorAll('.step');
  if (!steps.length) return;

  const setActive = (index) => {
    steps.forEach((step, idx) => {
      step.classList.toggle('is-active', idx === index);
    });
  };

  setActive(0);

  steps.forEach((step, index) => {
    step.addEventListener('mouseenter', () => setActive(index));
    step.addEventListener('focus', () => setActive(index), true);
  });
}

function setupAddOns() {
  const cards = document.querySelectorAll('.addon-card');
  cards.forEach((card, index) => {
    const toggle = card.querySelector('[data-addon-toggle]');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const expanded = card.classList.toggle('is-expanded');
      toggle.setAttribute('aria-expanded', String(expanded));
      const description = toggle.querySelector('[data-addon-label]');
      if (description) {
        description.textContent = expanded ? 'Show less' : 'Learn more';
      }
      const icon = toggle.querySelector('svg use');
      if (icon) {
        icon.setAttribute('href', expanded ? '#icon-chevron-up' : '#icon-chevron-down');
      }
      const detail = card.querySelector('.addon-card__details');
      if (detail) {
        detail.style.display = expanded ? 'grid' : 'none';
      }
    });

    const detail = card.querySelector('.addon-card__details');
    if (detail) {
      detail.style.display = 'none';
    }
  });
}

function setupMaternityPlanner() {
  const trigger = document.querySelector('[data-maternity-toggle]');
  const details = document.querySelector('.maternity-details');
  if (!trigger || !details) return;

  details.style.display = 'none';

  trigger.addEventListener('click', () => {
    const expanded = details.style.display === 'none';
    details.style.display = expanded ? 'grid' : 'none';
    trigger.setAttribute('aria-expanded', String(expanded));
    trigger.textContent = expanded ? 'Hide preview' : 'Use the maternity planner';
  });
}

function setupFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const button = item.querySelector('button');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    if (item === faqItems[0]) {
      item.classList.add('is-open');
      answer.style.maxHeight = '600px';
    }

    button.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      answer.style.maxHeight = isOpen ? '600px' : '0';
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

function setupWhatsApp() {
  const container = document.querySelector('.whatsapp-toggle');
  if (!container) return;

  const button = container.querySelector('.whatsapp-toggle__button');
  const panel = container.querySelector('.whatsapp-toggle__panel');

  const updateVisibility = () => {
    const shouldShow = window.scrollY > 320;
    container.classList.toggle('is-visible', shouldShow);
    if (!shouldShow && panel) {
      panel.hidden = true;
      button?.setAttribute('aria-expanded', 'false');
    }
  };

  updateVisibility();
  window.addEventListener('scroll', updateVisibility);

  if (button && panel) {
    panel.hidden = true;
    button.addEventListener('click', () => {
      const isHidden = panel.hidden;
      panel.hidden = !isHidden;
      button.setAttribute('aria-expanded', String(isHidden));
    });
  }
}

function setCopyrightYear() {
  const target = document.querySelector('[data-year]');
  if (target) {
    target.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupCounters();
  setupProcessSteps();
  setupAddOns();
  setupMaternityPlanner();
  setupFAQ();
  setupWhatsApp();
  setCopyrightYear();
});
