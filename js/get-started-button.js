// Simple dedicated script just for the Get Started button
// This runs immediately when loaded (no DOMContentLoaded wait)

console.log('Get Started button script loaded');

// Direct approach - use a timeout to make sure DOM is ready
setTimeout(function() {
  // Get the button by ID
  const getStartedBtn = document.getElementById('get-started-btn');
  
  if (getStartedBtn) {
    console.log('Found the Get Started button');
    
    // Add click event listener with all three scroll methods for maximum compatibility
    getStartedBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Get Started button clicked!');
      
      const contactSection = document.getElementById('contact');
      
      if (contactSection) {
        // Method 1: window.scrollTo
        const yOffset = -80; // Header height offset
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        
        // Method 2: scrollIntoView
        contactSection.scrollIntoView({behavior: 'smooth', block: 'start'});
        
        // Method 3: direct scroll
        document.documentElement.scrollTop = contactSection.offsetTop - 80;
        
        console.log('Scrolled to contact section');
      } else {
        console.error('Contact section not found');
      }
    });
  } else {
    console.error('Get Started button not found');
  }
}, 100); // Short delay to ensure DOM is ready