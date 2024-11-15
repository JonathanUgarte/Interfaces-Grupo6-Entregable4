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


// EFECTO PARALLAX CON ENTRADA A LA PAGINA
document.addEventListener("scroll", () => {
    const layers = document.querySelectorAll("#section-hero .layer");
    const scrollTop = window.scrollY;
    
    layers.forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      const yPos = -(scrollTop * speed);
      layer.style.transform = `translateY(${yPos}px)`;
      if (scrollTop > 10) layer.classList.add("show"); // Activa la visibilidad
    });
  });

/* // Selecciona los elementos character-4 y character-5
const character4 = document.querySelector('.character-4');
const character5 = document.querySelector('.character-5');

// Configura el efecto parallax
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Ajusta la posición vertical de las imágenes en función del scroll
    if (character4) {
        character4.style.transform = `translateY(${scrollPosition * 0.075}px)`;
    }
    if (character5) {
        character5.style.transform = `translateY(${scrollPosition * 0.075}px)`;
    }
});*/

/*// Selecciona los elementos
const character4 = document.querySelector('#character-4');
const character5 = document.querySelector('#character-5');
const appContainer2 = document.querySelector('.app-container2');

// Añade el evento scroll
window.addEventListener('scroll', () => {
    // Calcula la posición de app-container2
    const container2Position = appContainer2.getBoundingClientRect().top + window.scrollY;

    // Obtén la posición del scroll
    const scrollPosition = window.scrollY;

    // Calcula el desplazamiento para el parallax
    const parallaxOffset = scrollPosition * 0.4; 

    // Aplica el desplazamiento de parallax solo si está por encima de container2
    if (scrollPosition + window.innerHeight < container2Position) {
        character4.style.transform = `translateY(${parallaxOffset}px)`;
        character5.style.transform = `translateY(${parallaxOffset}px)`;
    } else {
        // Mantén la posición justo antes de llegar a app-container2
        const stopPosition = container2Position - window.innerHeight;
        character4.style.transform = `translateY(${stopPosition * 0.4}px)`;
        character5.style.transform = `translateY(${stopPosition * 0.4}px)`;
    }

});*/

// Seleccionamos los elementos
const character4 = document.getElementById("character-4");
const character5 = document.getElementById("character-5");
const textElements = document.getElementById(".container-txt");
const imageFrames = document.getElementById(".carrusel-img");

// Función para aplicar parallax en diferentes velocidades
function parallaxEffect() {
    const scrollPosition = window.scrollY;

    // Velocidades de los personajes
    character4.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    character5.style.transform = `translateY(${scrollPosition * 0.3}px)`;

    // Velocidad para el texto
    textElements.forEach((text, index) => {
        text.style.transform = `translateY(${scrollPosition * 0.4 * (index + 1)}px)`;
    });

    // Velocidad para los marcos de fotos (ligeramente diferente al texto)
    imageFrames.forEach((image, index) => {
        image.style.transform = `translateY(${scrollPosition * 0.5 * (index + 1)}px)`;
    });
}

// Escucha el evento de scroll
window.addEventListener("scroll", parallaxEffect);

/*ANIMACION SPRITESHEET */
document.querySelector('.coin').style.animationDuration = '1s';
