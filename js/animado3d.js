const modelViewer = document.querySelector('model-viewer');

let isDragging = false; // Para controlar si estamos "arrastrando" el modelo

// Variables para almacenar las coordenadas iniciales del clic
let startX = 0;
let startY = 0;

// Guardar el ángulo de rotación actual del modelo
let currentX = 0;
let currentY = 0;

// Evento para iniciar el arrastre (cuando se presiona el botón del mouse)
document.addEventListener('click', (event) => {
  isDragging = true; // El usuario empieza a hacer clic y arrastrar

  // Obtener las posiciones iniciales del mouse
  startX = event.clientX;
  startY = event.clientY;
});

// Evento para mover el modelo mientras se arrastra
document.addEventListener('click', (event) => {
  if (isDragging) {
    // Calcular el desplazamiento del mouse
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    // Ajustar la rotación del modelo en función del desplazamiento
    currentX -= deltaX * 0.5;  // Invertir la dirección de la rotación en el eje X
    currentY += deltaY * 0.5;  // Mantener la rotación normal en el eje Y

    // Aplicar la rotación (ahora gira en la dirección correcta)
    modelViewer.cameraOrbit = `${currentX}deg ${currentY}deg 0`;

    // Actualizar las posiciones del mouse
    startX = event.clientX;
    startY = event.clientY;
  }
});

// Evento para detener el arrastre (cuando se suelta el botón del mouse)
document.addEventListener('click', () => {
  isDragging = false; // El arrastre se detiene cuando se suelta el botón
});
