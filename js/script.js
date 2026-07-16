// ==========================================================
// PORTFOLIO SCRIPT
//
// This file adds interactivity on top of the static HTML/CSS:
//   1. Sets the footer's copyright year automatically
//   2. Toggles the mobile hamburger menu open/closed
//   3. Highlights the current section in the navbar while scrolling
//      ("scroll-spy")
//   4. Validates the contact form and shows feedback messages
//
// Wrapping everything in DOMContentLoaded makes sure the HTML has
// fully loaded before this script tries to grab any elements —
// otherwise document.getElementById() could return null.
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Footer year ----------
     Instead of hardcoding a year in the HTML that would go stale
     every January, we set it here using the visitor's own clock. */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 2. Mobile hamburger menu ----------
     The hamburger button and the nav menu are hidden by CSS on
     desktop widths, and only becomes relevant below the 680px
     breakpoint (see @media rule in style.css). */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    // classList.toggle() adds the class if it's missing and removes
    // it if it's present, and returns true/false for whether it's
    // now present — handy for keeping the button's aria-expanded
    // attribute (used by screen readers) in sync with the menu state.
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Once a visitor taps a link inside the mobile menu, close the
  // menu automatically so it doesn't stay open covering the page
  // after they've navigated.
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 3. Active nav link on scroll ("scroll-spy") ----------
     Goal: as the visitor scrolls past each <section id="...">, the
     matching nav link should light up green automatically — without
     needing to click it. We use the IntersectionObserver browser API,
     which is more efficient than manually checking scroll position
     on every scroll event. */
  const sections = document.querySelectorAll('main section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  // Removes .active from every nav link, then adds it back only to
  // the one whose href matches the given section id.
  const setActiveLink = (id) => {
    navLinkEls.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // entries = list of sections whose visibility just changed.
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    // rootMargin shrinks the "viewport" the observer checks against:
    // -40% from the top and -55% from the bottom means a section
    // only counts as "active" once it's roughly in the middle of the
    // screen, rather than the instant its edge appears at the very
    // bottom of the viewport.
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));

  /* ---------- 4. Contact form validation ---------- */
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('charCount');
  const formStatus = document.getElementById('formStatus');

  const MAX_CHARS = 300; // must match the textarea's maxlength in index.html

  // Updates the "N characters left" label every time the visitor
  // types in the message box, and switches it to orange once they're
  // getting close to the limit.
  messageInput.addEventListener('input', () => {
    const remaining = MAX_CHARS - messageInput.value.length;
    charCount.textContent = `${remaining} characters left`;
    charCount.classList.toggle('warning', remaining <= 30);
  });

  // Marks a field as invalid (red border via CSS) and displays a
  // message explaining what's wrong.
  const showError = (input, errorEl, message) => {
    input.closest('.form-field').classList.add('invalid');
    errorEl.textContent = message;
  };

  // Removes the invalid styling/message once a field is fixed.
  const clearError = (input, errorEl) => {
    input.closest('.form-field').classList.remove('invalid');
    errorEl.textContent = '';
  };

  // Simple regex check for "something@something.something" — not a
  // perfect email validator (no regex truly is), but good enough to
  // catch obvious typos like a missing "@" or domain.
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  form.addEventListener('submit', (e) => {
    // Stops the browser's default "reload the page and send data
    // somewhere" behavior, since this is a static site with no
    // backend to actually receive the form yet.
    e.preventDefault();
    let isValid = true;

    // --- Name check: just needs to be non-empty ---
    if (nameInput.value.trim().length === 0) {
      showError(nameInput, document.getElementById('nameError'), 'Please enter your name.');
      isValid = false;
    } else {
      clearError(nameInput, document.getElementById('nameError'));
    }

    // --- Email check: must pass the regex above ---
    if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, document.getElementById('emailError'), 'Please enter a valid email.');
      isValid = false;
    } else {
      clearError(emailInput, document.getElementById('emailError'));
    }

    // --- Message check: just needs to be non-empty ---
    if (messageInput.value.trim().length === 0) {
      showError(messageInput, document.getElementById('messageError'), 'Please enter a message.');
      isValid = false;
    } else {
      clearError(messageInput, document.getElementById('messageError'));
    }

    // If any field failed, stop here and show a general error
    // message instead of the "sent" confirmation below.
    if (!isValid) {
      formStatus.textContent = 'Please fix the errors above.';
      formStatus.classList.add('error');
      return;
    }

    // NOTE: This is a static site (GitHub Pages), so there is no
    // backend to actually send the message anywhere yet — this only
    // gives the visitor visual confirmation that their input was
    // valid. To make it actually functional, you could:
    //   1. Sign up for a free form backend like Formspree
    //      (https://formspree.io), point the <form> tag's "action"
    //      at the endpoint they give you, and remove the
    //      e.preventDefault() call above, OR
    //   2. Build your own backend/server to receive the data.
    formStatus.classList.remove('error');
    formStatus.textContent = 'Message sent! Thanks for reaching out — I\'ll get back to you soon.';

    // Reset the form fields and the character counter back to their
    // starting state for the next visitor.
    form.reset();
    charCount.textContent = `${MAX_CHARS} characters left`;
    charCount.classList.remove('warning');
  });

});
