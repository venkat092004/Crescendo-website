document.addEventListener('DOMContentLoaded', function () {
  // === Mobile Navigation Toggle ===
  const mobileMenuIcon = document.querySelector('.mobile-menu i');
  const navMenu = document.querySelector('nav ul');

  if (mobileMenuIcon && navMenu) {
    mobileMenuIcon.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuIcon.classList.toggle('fa-times');
    });
  }

  // === Smooth Scroll for Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile menu after navigation (for mobile)
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('fa-times');
          }
        }
      }
    });
  });

  // === Work Filtering ===
  const tabBtns = document.querySelectorAll('.tab-btn');
  const workItems = document.querySelectorAll('.work-item');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-tab');

      workItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // === Scroll Down Button ===
  const scrollDownBtn = document.querySelector('.scroll-down');
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
      window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: 'smooth'
      });
    });
  }

  // === Contact Form Submission ===
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Replace with actual submission logic (AJAX, fetch, etc.)
      alert('Thank you for your message! We will contact you soon.');
      this.reset();
    });
  }

  // === Click Sound ===
  window.playclicksound = function () {
    const sound = document.getElementById("clicksound");
    if (sound) {
      sound.currentTime = 0; // Rewind to start
      sound.play().catch(error => {
        console.warn("Click sound failed to play:", error);
      });
    }
  };
});

// === AOS Animation Init (Safe Check) ===
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 120
  });
}