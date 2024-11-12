// Selecciona todos los bloques de texto en la columna derecha
const textBlocks = document.querySelectorAll('.text-block');
const imageElement = document.querySelector('.changing-image');

let currentImageSrc = ''; // Mantiene el seguimiento de la imagen actual

// Opciones del observer: umbral de 0.5 significa que el bloque debe estar al 50% visible
const observerOptions = {
  root: null, // Observa en la ventana actual
  threshold: 0.5 // Ajusta según prefieras cuánto del bloque debe ser visible para activar el cambio
};

// Crea el observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const newImageSrc = entry.target.getAttribute('data-image');
      
      // Cambia la imagen solo si es diferente de la actual
      if (newImageSrc !== currentImageSrc) {
        currentImageSrc = newImageSrc;

        // Aplica la transición de opacidad para que el cambio sea suave
        imageElement.style.opacity = 0;

        setTimeout(() => {
          imageElement.src = newImageSrc;
          imageElement.style.opacity = 1;
        }, 300); // 300 ms de transición
      }
    }
  });
}, observerOptions);

// Observa cada bloque de texto
textBlocks.forEach(block => observer.observe(block));
