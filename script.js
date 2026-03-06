// Mobile navigation toggle
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('active');
  });
});

// Add subtle header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
});
