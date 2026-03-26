// script.js - NightRolls & Plates

document.addEventListener('DOMContentLoaded', () => {
    
    // ============== MOBILE MENU ==============
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Open Mobile Menu
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    // Close Mobile Menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
    }

    // Event Listeners
    hamburger.addEventListener('click', openMobileMenu);
    closeMenu.addEventListener('click', closeMobileMenu);

    // Close menu when clicking any mobile link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close menu when clicking outside (optional smooth UX)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // ============== SMOOTH SCROLLING ==============
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: targetPosition - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============== HEADER SCROLL EFFECT ==============
    const header = document.querySelector('.header');
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down - hide header slightly
            header.style.transform = 'translateY(-15px)';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // ============== ADD TO CART ANIMATION (Future Ready) ==============
    const addButtons = document.querySelectorAll('.add-btn');
    
    if (addButtons.length > 0) {
        addButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const originalText = this.textContent;
                this.textContent = '✓';
                this.style.background = '#22c55e';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                    this.style.color = '';
                }, 1500);
            });
        });
    }

    // ============== PERFORMANCE OPTIMIZATION ==============
    // Lazy load images (already using loading="lazy" in HTML)
    
    // Keyboard accessibility for mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ============== FINAL MESSAGE ==============
    console.log('%c✅ NightRolls & Plates Website Loaded Successfully!', 
        'color: #FF6B00; font-size: 16px; font-weight: bold;');
    console.log('%cMobile menu is smooth & ready | Fast loading | SEO Optimized', 
        'color: #666; font-size: 14px;');

});
