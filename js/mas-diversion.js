// Selecciona todos los bloques de texto y la imagen cambiante
const textBlocks = document.querySelectorAll('.text-block');
const imageElement = document.querySelector('.changing-image');

let currentImageSrc = ''; // Mantiene el seguimiento de la imagen actual

// Opciones del IntersectionObserver
const observerOptions = {
  root: null, // Observa en el viewport
  threshold: 0.5 // El 50% del bloque debe ser visible
};

// Crea el IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const textBlock = entry.target;

    if (entry.isIntersecting) {
      // --- Comportamiento de la imagen ---
      const newImageSrc = textBlock.getAttribute('data-image');

      if (newImageSrc !== currentImageSrc) {
        currentImageSrc = newImageSrc;

        // Transición suave para la imagen
        imageElement.style.opacity = 0;

        setTimeout(() => {
          imageElement.src = newImageSrc;
          imageElement.style.opacity = 1;
        }, 300); // 300 ms de transición
      }

      // --- Comportamiento del texto ---
      textBlock.classList.add('scaled'); // Agrega la clase para animación
    } else {
      // Elimina la clase si el bloque sale del viewport
      textBlock.classList.remove('scaled');
    }
  });
}, observerOptions);

// Observa cada bloque de texto
textBlocks.forEach(block => observer.observe(block));
