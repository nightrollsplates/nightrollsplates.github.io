// script.js - NightRolls & Plates (Smooth & Premium Version)

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'visible';
}

// Event Listeners
hamburger.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking on any link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            const headerOffset = 80; // Account for sticky header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect - adds subtle shadow when scrolled
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.96)';
        header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.92)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
    }
});

// Keyboard support for closing mobile menu (ESC key)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Simple loading animation for images (optional enhancement)
function enhanceImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach((img, index) => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.transition = 'opacity 0.6s ease';
            img.style.opacity = '0.6';
            
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        }
    });
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    enhanceImages();
    
    // Optional: Add a small welcome console message (for developers)
    console.log('%cNightRolls & Plates - Premium Late Night Food 🍜🌙', 
                'color: #FF6B00; font-size: 14px; font-weight: 600;');
});

// Prevent any unwanted scrolling issues on mobile
document.addEventListener('touchmove', (e) => {
    if (mobileMenu.classList.contains('active')) {
        // Allow scrolling only inside mobile menu if needed
    }
}, { passive: true });

// Performance optimization: Throttle scroll event if needed in future
