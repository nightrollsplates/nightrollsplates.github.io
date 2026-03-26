// script.js - NightRolls & Plates (Premium Version)

document.addEventListener('DOMContentLoaded', () => {

    // ============== MOBILE MENU ==============
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Open Mobile Menu
    const openMobileMenu = () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind menu
    };

    // Close Mobile Menu
    const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
    };

    // Event Listeners for Mobile Menu
    hamburger.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);

    // Close menu when clicking any link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close menu when clicking outside the menu content
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // ============== SMOOTH SCROLLING ==============
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: targetPosition - headerHeight - 30,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============== HEADER SCROLL EFFECT ==============
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 150) {
            // Scrolling down - slightly hide header
            header.style.transform = 'translateY(-15px)';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // ============== KEYBOARD ACCESSIBILITY ==============
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ============== MENU ITEM HOVER ANIMATION (Optional Enhancement) ==============
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(8px)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });

    // ============== PERFORMANCE & SEO MESSAGE ==============
    console.log('%c✅ NightRolls & Plates - Premium Website Loaded Successfully!', 
        'color: #FF6B00; font-size: 16px; font-weight: bold;');

    console.log('%cMobile Menu: Smooth | Scroll: Enhanced | Performance: Optimized', 
        'color: #555; font-size: 14px;');

    // Optional: Add to cart simulation for future
    console.log('%cTip: You can easily add "Add to Cart" functionality later.', 
        'color: #888; font-size: 13px;');
});
