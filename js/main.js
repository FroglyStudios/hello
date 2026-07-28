document.addEventListener('DOMContentLoaded', () => {
    // --- Cookie Banner Logic ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    // Check local storage for consent
    if (cookieBanner && acceptCookiesBtn) {
        const hasConsented = localStorage.getItem('frogly_cookie_consent');
        
        if (!hasConsented) {
            // Show banner with a slight delay
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1000);
        }
        
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('frogly_cookie_consent', 'true');
            cookieBanner.classList.remove('show');
        });
    }

    // --- Fade-In Animations on Scroll ---
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // --- Smooth Scrolling for Anchor Links (fallback/enhancement) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Adjust for fixed header height
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
