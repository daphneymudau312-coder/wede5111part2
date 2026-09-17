// Set the current year in the footer for all pages.
document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Toggle the mobile navigation menu.
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('is-open');
    });
  }

  // Allow form submission to behave like a static page demo without reloading.
  const forms = document.querySelectorAll('form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');

      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Request sent';
        button.disabled = true;

        setTimeout(function () {
          button.textContent = originalText;
          button.disabled = false;
          form.reset();
        }, 1800);
      }
    });
  });
});
