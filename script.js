// Animación de entrada en las secciones
window.onload = function() {
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 150) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    });

    // Hacer visible la sección cuando el usuario haga scroll hacia ella
    const sectionStyles = document.createElement('style');
    sectionStyles.innerHTML = `
        .section {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(sectionStyles);
};

// Animación de los enlaces del navbar
const navbarLinks = document.querySelectorAll('.navbar ul li a');
navbarLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});
