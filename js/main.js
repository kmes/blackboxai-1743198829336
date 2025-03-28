// Drawer menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const drawerLinks = document.querySelectorAll('.drawer a');

    if (menuButton && drawer && overlay) {
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            drawer.classList.toggle('open');
            overlay.classList.toggle('open');
        });

        overlay.addEventListener('click', () => {
            drawer.classList.remove('open');
            overlay.classList.remove('open');
        });

        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                drawer.classList.remove('open');
                overlay.classList.remove('open');
            });
        });

        // Close drawer when clicking outside
        document.addEventListener('click', (e) => {
            if (!drawer.contains(e.target) && e.target !== menuButton) {
                drawer.classList.remove('open');
                overlay.classList.remove('open');
            }
        });
    }
});

// Initialize skill bar animations when they come into view
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
            observer.unobserve(bar);
        }
    });
};

const skillBarObserver = new IntersectionObserver(animateSkillBars, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    skillBarObserver.observe(bar);
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});