// Running Training Page Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Handle explore programs button
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const programsSection = document.querySelector('.gym-programs');
            if (programsSection) {
                programsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Handle start program buttons
    const programButtons = document.querySelectorAll('[data-program]');
    programButtons.forEach(button => {
        button.addEventListener('click', function() {
            const program = this.getAttribute('data-program');
            console.log('Starting program:', program);
            // Add your program start logic here
        });
    });

    // Handle start running journey button
    const startBtn = document.getElementById('start-gym-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            console.log('Starting running journey');
            // Add your journey start logic here
        });
    }

    // Handle sign in button
    const signinBtn = document.getElementById('signin-btn');
    if (signinBtn) {
        signinBtn.addEventListener('click', function() {
            console.log('Sign in clicked');
            // Add your sign in logic here
        });
    }

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', 
                hamburger.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
