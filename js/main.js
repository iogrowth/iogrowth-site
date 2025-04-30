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
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Get the header height
          const headerHeight = 80; // Fixed value to ensure consistency
          
          // Calculate position and scroll
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
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

// Additional direct handler for the Get Started button
document.addEventListener('DOMContentLoaded', function() {
  const getStartedBtn = document.querySelector('.hero .btn-primary');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        // Fixed offset height
        const headerHeight = 80;
        const yPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: yPosition,
          behavior: 'smooth'
        });
      }
    });
  }
});