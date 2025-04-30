// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    
    // Toggle the icon between bars and X
    const icon = mobileMenuBtn.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
}

// Close mobile menu when clicking a link
if (mobileNavLinks) {
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      
      // Reset the icon
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header height
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add shadow to header on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Initialize AOS animations (if you decide to add them)
// AOS.init({ duration: 800, easing: 'ease-out' });