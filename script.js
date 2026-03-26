// script.js - NightRolls & Plates (Final Premium Version)

document.addEventListener('DOMContentLoaded', () => {

    // ==================== MOBILE MENU ====================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    const openMobileMenu = () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
    };

    hamburger.addEventListener('click', openMobileMenu);
    closeMenu.addEventListener('click', closeMobileMenu);

    // Close mobile menu when any link is clicked
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ==================== SMOOTH SCROLLING ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#' || !targetId) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                const headerHeight = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== HEADER SCROLL EFFECT (Glass Enhancement) ====================
    const header = document.querySelector('.header');

    const handleScroll = () => {
        if (window.scrollY > 60) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.18)';
            header.style.borderBottom = '1px solid rgba(255, 107, 0, 0.2)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.92)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
            header.style.borderBottom = '1px solid rgba(255, 107, 0, 0.15)';
        }
    };

    window.addEventListener('scroll', handleScroll);

    // ==================== KEYBOARD SUPPORT ====================
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ==================== IMAGE LOAD ANIMATION ====================
    const images = document.querySelectorAll('img');
    
    const fadeInImages = () => {
        images.forEach(img => {
            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.style.transition = 'opacity 0.8s ease';
                img.style.opacity = '0.7';

                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                }, { once: true });
            }
        });
    };

    // Run image enhancement after everything loads
    window.addEventListener('load', fadeInImages);

    // ==================== OPTIONAL MICRO INTERACTIONS ====================
    // Add subtle active state to CTA buttons on click
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.96)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    // Console message for developers
    console.log('%c🌙 NightRolls & Plates Loaded Successfully | Premium Late Night Food in Noida',
        'color: #FF6B00; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;');

});
