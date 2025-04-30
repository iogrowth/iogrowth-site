// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');
  
  // Add shadow to header on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // EXPLICITLY handle the Get Started button
  const getStartedBtn = document.getElementById('get-started-btn');
  if (getStartedBtn) {
    console.log('Get Started button found:', getStartedBtn);
    
    getStartedBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Get Started button clicked!');
      
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        // Get header height or use a default value
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const yOffset = -headerHeight; // Adjust the scroll position by header height
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        console.log('Scrolling to contact section, header height:', headerHeight);
        console.log('Target position:', y);
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        console.error('Contact section not found!');
      }
    });
  } else {
    console.error('Get Started button not found!');
  }

  // Handle all other anchor links
  document.querySelectorAll('a[href^="#"]:not(#get-started-btn)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      console.log('Anchor link clicked, target:', targetId);
      
      if (!targetId) return; // Skip empty hash links
      
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Get header height or use a default value
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const yOffset = -headerHeight; // Adjust the scroll position by header height
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        
        console.log(`Scrolling to section #${targetId} at position: ${y}`);
      } else {
        console.error(`Target element #${targetId} not found!`);
      }
    });
  });

  // Mobile menu functionality if present
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      
      // Toggle the icon between bars and X
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        
        // Reset the icon
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }
});

// Additional safety measure - attach event after a short delay
setTimeout(function() {
  const getStartedBtn = document.getElementById('get-started-btn');
  if (getStartedBtn) {
    console.log('Adding backup click handler to Get Started button');
    
    getStartedBtn.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Get Started button clicked (backup handler)!');
      
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}, 500);

console.log('Simple scroll handler initialized');