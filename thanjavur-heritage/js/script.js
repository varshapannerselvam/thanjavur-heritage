// =============================================================
// Thanjavur — living heritage
// Shared behaviour for every page
// =============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile nav toggle -----------------------------------
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var isOpen = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close menu after a link is tapped (mobile)
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // ---- Highlight the current page in the nav ---------------
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // ---- One orchestrated hero reveal on load -----------------
  var heroArt = document.querySelector('.hero-art');
  if (heroArt) {
    window.requestAnimationFrame(function () {
      heroArt.classList.add('reveal');
    });
  }

  // ---- Scroll-reveal for section headings -------------------
  var revealTargets = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window && revealTargets.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in-view'); });
  }

  // ---- Contact form validation (client-side only) -----------
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');
      var status = document.getElementById('form-status');

      var valid = true;
      valid = validateField(name, name.value.trim().length > 1, 'Please enter your name.') && valid;
      valid = validateField(email, isValidEmail(email.value.trim()), 'Please enter a valid email address.') && valid;
      valid = validateField(message, message.value.trim().length > 4, 'Message is too short.') && valid;

      if (!valid) {
        status.className = '';
        return;
      }

      // No backend is wired up — this simply confirms the form works.
      status.textContent = 'Thanks, ' + name.value.trim() + '. Your message is ready to send — connect this form to your backend or a form service to deliver it.';
      status.className = 'visible';
      form.reset();
    });
  }

  function validateField(field, isValid, message) {
    var errorEl = document.getElementById(field.id + '-error');
    if (!isValid) {
      if (errorEl) errorEl.textContent = message;
      field.setAttribute('aria-invalid', 'true');
      return false;
    }
    if (errorEl) errorEl.textContent = '';
    field.removeAttribute('aria-invalid');
    return true;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

});
