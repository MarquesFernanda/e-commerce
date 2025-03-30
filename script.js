document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuIconBars = document.querySelectorAll('.menu-icon-bar');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        // Animate hamburger to X
        menuIconBars[0].style.transform = nav.classList.contains('active') 
            ? 'rotate(45deg) translate(5px, 5px)' 
            : '';
        
        menuIconBars[1].style.opacity = nav.classList.contains('active') 
            ? '0' 
            : '1';
        menuIconBars[2].style.transform = nav.classList.contains('active') 
            ? 'rotate(-45deg) translate(7px, -7px)' 
            : '';
    });

    menuOverlay.addEventListener('click', function() {
        nav.classList.remove('active');
        menuOverlay.classList.remove('active');
        
        // Reset hamburger animation
        menuIconBars[0].style.transform = '';
        menuIconBars[1].style.opacity = '1';
        menuIconBars[2].style.transform = '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = nav.contains(event.target) || 
                            menuButton.contains(event.target);
        
        if (!isClickInside && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuOverlay.classList.remove('active');
            
            // Reset hamburger animation
            menuIconBars[0].style.transform = '';
            menuIconBars[1].style.opacity = '1';
            menuIconBars[2].style.transform = '';
        }
    });

    // Prevent menu from closing when clicking inside
    nav.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Add smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Cart counter functionality
    const cartButtons = document.querySelectorAll('.cart-button');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Add animation effect
            cartCount.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector("nav");
    const menuOverlay = document.querySelector(".menu-overlay");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("active");
        menuOverlay.classList.toggle("active");

        // Animação do ícone do menu
        menuButton.classList.toggle("open");
    });

    menuOverlay.addEventListener("click", function () {
        nav.classList.remove("active");
        menuOverlay.classList.remove("active");
        menuButton.classList.remove("open");
    });
});

