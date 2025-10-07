// Floating Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const headerSection = document.querySelector('.header_section');
    
    if (navbar && headerSection) {
        let isFloating = false;
        
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const headerHeight = headerSection.offsetHeight;
            
            if (scrollTop > headerHeight - 100 && !isFloating) {
                navbar.classList.add('navbar-floating');
                isFloating = true;
            } else if (scrollTop <= headerHeight - 100 && isFloating) {
                navbar.classList.remove('navbar-floating');
                isFloating = false;
            }
        }
        
        // Throttle scroll events for better performance
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(handleScroll);
                ticking = true;
                setTimeout(() => { ticking = false; }, 16);
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
});