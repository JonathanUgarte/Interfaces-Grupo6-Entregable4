document.addEventListener('DOMContentLoaded', () => {
    // Selección de capas para el parallax
    const parallaxElements = {
        left: document.querySelector('.left'),
        center: document.querySelector('.center'),
        right: document.querySelector('.right')
    };

    // Función de efecto parallax al hacer scroll
    function applyParallax() {
        const scrollY = window.scrollY;

        // Ajusta los factores de velocidad según el efecto deseado
        parallaxElements.left.style.transform = `translateY(${scrollY * 0.3}px)`;
        parallaxElements.center.style.transform = `translateY(${scrollY * 0.5}px)`;
        parallaxElements.right.style.transform = `translateY(${scrollY * 0.7}px)`;
    }

    // Ejecuta el efecto parallax al hacer scroll
    window.addEventListener('scroll', applyParallax);

    // Animación de entrada para los personajes
    const personajes = document.querySelectorAll('.personajes img');
    personajes.forEach((personaje, index) => {
        setTimeout(() => {
            personaje.style.opacity = 1;
            personaje.style.transform = 'translateY(0)'; // Se mueve a su posición original
        }, 300 * index); // Ajusta el tiempo entre las entradas
    });
});
