// script.js - NightRolls & Plates (Premium Food Website)

document.addEventListener('DOMContentLoaded', () => {

    // ============== MOBILE MENU ==============
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Open Mobile Menu
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close Mobile Menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
    }

    hamburger.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);

    // Close menu when clicking any mobile link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
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

            if (targetId === '#' || targetId === '') return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();

                const headerOffset = document.querySelector('.header').offsetHeight + 30;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
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
            header.style.transform = 'translateY(-12px)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // ============== FOOD CARD HOVER ENHANCEMENT ==============
    const menuCards = document.querySelectorAll('.menu-card');

    menuCards.forEach((card, index) => {
        // Staggered animation on load
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';

        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
            card.style.transitionDelay = `${index * 80}ms`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300);
    });

    // ============== FEATURED ITEM ANIMATION ==============
    const featuredItem = document.querySelector('.featured-item');
    
    if (featuredItem) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    featuredItem.style.opacity = '1';
                    featuredItem.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });

        featuredItem.style.opacity = '0';
        featuredItem.style.transform = 'translateY(30px)';
        featuredItem.style.transition = 'all 0.8s ease';

        observer.observe(featuredItem);
    }

    // ============== KEYBOARD SUPPORT ==============
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ============== FINAL CONSOLE MESSAGE ==============
    console.log('%c✅ NightRolls & Plates - Premium Late Night Food Website Loaded!', 
        'color: #FF6B00; font-size: 16px; font-weight: bold;');

    console.log('%cHero Background + Food Animations + Smooth Mobile Menu Active', 
        'color: #666; font-size: 14px;');

});
