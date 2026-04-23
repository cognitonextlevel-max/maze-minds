document.addEventListener('DOMContentLoaded', () => {
    // 3D Tilt Effect
    const tiltContainers = document.querySelectorAll('.tilt-container');

    tiltContainers.forEach(container => {
        const card = container.querySelector('.tilt-card');
        
        container.addEventListener('mousemove', (e) => {
            // Get bounding rect for the container
            const rect = container.getBoundingClientRect();
            
            // Calculate mouse position relative to container center
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation percentages
            // The further from center, the higher the rotation
            const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg rotation
            const rotateY = ((x - centerX) / centerX) * 15;
            
            // Apply transformation
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            // If it has a glow effect, update its position
            const glow = card.querySelector('.card-glow');
            if (glow) {
                const glowX = (x / rect.width) * 100;
                const glowY = (y / rect.height) * 100;
                glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 152, 0, 0.4), transparent 60%)`;
            }
        });
        
        // Reset on mouse leave
        container.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0)';
            card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            
            const glow = card.querySelector('.card-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at 50% 0%, rgba(255, 152, 0, 0.2), transparent 70%)`;
            }
        });
        
        // Remove transition on mouse enter for smoother tracking
        container.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
});
