// script.js
// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Mouse glow effect
    const glow = document.getElementById('mouse-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.opacity = '1';
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });

    // Create smoke particles in hero
    function createSmoke() {
        const container = document.getElementById('smoke-container');
        for (let i = 0; i < 28; i++) {
            const particle = document.createElement('div');
            particle.className = 'smoke-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = (30 + Math.random() * 60) + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDuration = (6 + Math.random() * 7) + 's';
            particle.style.animationDelay = '-' + Math.random() * 8 + 's';
            particle.style.opacity = Math.random() * 0.6 + 0.2;
            container.appendChild(particle);
            
            // Remove and recreate for infinite loop
            setTimeout(() => {
                particle.remove();
                createSmoke();
            }, 15000);
        }
    }
    createSmoke();

    // 3D tilt for cards (simple vanilla implementation)
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.6s ease';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            setTimeout(() => {
                card.style.transition = '';
            }, 600);
        });
    });

    // Button ripple effect (already handled via CSS, but JS trigger backup)
    const rippleButtons = document.querySelectorAll('.ripple-btn');
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.6)';
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'rippleAnim 0.8s linear';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 800);
        });
    });

    console.log('%c🚀 NightRolls & Plates website loaded — ready to make users hungry!', 'color:#F5B041; font-size:14px; font-weight:700');
});
