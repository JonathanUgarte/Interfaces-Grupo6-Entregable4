// Función para comprobar si un elemento está en pantalla
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  }
  
  // Función para añadir o quitar la clase "show" dependiendo de la visibilidad
  function toggleVisibilityOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      if (isElementInView(element)) {
        // Si el elemento está en la vista, añadir la clase "show"
        element.classList.add('show');
      } else {
        // Si el elemento no está en la vista, quitar la clase "show"
        element.classList.remove('show');
      }
    });
  }
  
  // Evento de scroll
  window.addEventListener('scroll', toggleVisibilityOnScroll);
  
  // Llamar a la función al cargar la página para verificar la visibilidad inicial
  toggleVisibilityOnScroll();
  