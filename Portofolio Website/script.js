document.addEventListener('DOMContentLoaded', function() {
    // Toggle Menu Icon
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Handle click events for "Hire" and "Contact" buttons
    const hireButton = document.querySelector('.btn-group .btn[href="#"]');
    const contactButton = document.querySelector('.btn-group .btn[href="#contact"]');

    hireButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Hire button clicked!');
    });

    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll Reveal Animation
    ScrollReveal().reveal('.home-content, .about-content, .services-container', {
        delay: 200,
        distance: '50px',
        origin: 'bottom'
    });

    // Typed.js Animation for Dynamic Text
    const typed = new Typed('.home-content h3 span', {
        strings: ['Frontend Developer', 'Web Developer', 'UI/UX Enthusiast'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
});