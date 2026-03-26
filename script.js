// script.js - NightRolls & Plates (Premium Version)

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

    // Close menu when clicking any link
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

                const headerHeight = document.querySelector('.header').offsetHeight + 40;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: targetPosition - headerHeight,
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

        if (currentScroll > lastScroll && currentScroll > 120) {
            header.style.transform = 'translateY(-15px)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // ============== STAGGERED ANIMATION FOR MENU CARDS ==============
    const menuCards = document.querySelectorAll('.menu-card');

    menuCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';

        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
            card.style.transitionDelay = `${index * 60}ms`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 400);
    });

    // ============== FEATURED ITEM ANIMATION ==============
    const featuredItem = document.querySelector('.featured-item');

    if (featuredItem) {
        featuredItem.style.opacity = '0';
        featuredItem.style.transform = 'translateY(30px)';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    featuredItem.style.transition = 'all 0.9s ease';
                    featuredItem.style.opacity = '1';
                    featuredItem.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.25 });

        observer.observe(featuredItem);
    }

    // ============== KEYBOARD SUPPORT (ESC to close menu) ==============
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ============== FINAL MESSAGE ==============
    console.log('%c✅ NightRolls & Plates - Premium Late Night Food Website Loaded Successfully!', 
        'color: #FF6B00; font-size: 16px; font-weight: bold;');

    console.log('%cMobile Menu Smooth | Scroll Enhanced | Menu Animations Active', 
        'color: #555; font-size: 14px;');

});
