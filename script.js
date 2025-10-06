// ==============================
// MOBILE MENU TOGGLE
// ==============================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// ==============================
// SMOOTH SCROLL + ACTIVE LINK HIGHLIGHT
// ==============================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Smooth scrolling when clicking nav links
navItems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth',
      });
    }

    // Close mobile menu on link click
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});

// ==============================
// QUOTE FORM - THANK YOU MODAL
// ==============================
const form = document.getElementById('quote-form');
const modal = document.getElementById('thankYouModal');
const closeBtn = document.querySelector('.close-btn');

if (form && modal) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    modal.style.display = 'block';
    form.reset();
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Close modal when clicking outside of it
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
