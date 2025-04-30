// Function to scroll to contact section
function scrollToContact(event) {
  event.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const headerHeight = 80; // Fixed header height
    const sectionPosition = contactSection.offsetTop - headerHeight;
    
    // Use both methods for maximum compatibility
    // Method 1: scrollTo
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
    
    // Method 2: scrollIntoView (backup)
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    console.log("Scrolling to contact section at position:", sectionPosition);
  }
}

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

// Add shadow to header on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Simple script to handle the Get Started button click
document.addEventListener('DOMContentLoaded', function() {
  // Get the button and the contact section
  const getStartedBtn = document.querySelector('.hero .btn-primary');
  const contactSection = document.getElementById('contact');
  
  // Only add listener if both elements exist
  if (getStartedBtn && contactSection) {
    getStartedBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the position of the contact section
      const sectionPosition = contactSection.offsetTop;
      
      // Scroll to the section with offset for header
      window.scrollTo({
        top: sectionPosition - 80, // 80px for header height
        behavior: 'smooth'
      });
      
      console.log('Button clicked, scrolling to:', sectionPosition - 80);
    });
    
    console.log('Scroll handler attached to Get Started button');
  }
});

// Initialize AOS animations (if you decide to add them)
// AOS.init({ duration: 800, easing: 'ease-out' });

// Handle all anchor links for smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
  // Select all links with hash (#) but not the Get Started button (already handled)
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not(.hero .btn-primary)');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          const sectionPosition = targetSection.offsetTop;
          
          window.scrollTo({
            top: sectionPosition - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});