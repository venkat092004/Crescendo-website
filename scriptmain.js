// Mobile Navigation Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu i');
const navMenu = document.querySelector('nav ul');

mobileMenuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// AOS Animation Init (if you're using AOS)
AOS.init({
  duration: 1000,
  once: true
});

// Optional: Scroll down arrow behavior
const scrollDownBtn = document.querySelector('.scroll-down');
scrollDownBtn.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight * 0.8,
    behavior: 'smooth'
  });
});
