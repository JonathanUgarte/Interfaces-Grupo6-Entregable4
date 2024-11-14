document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".progress-bar .block");
  const loadingText = document.querySelector(".loading-text");
  let progress = 0;

  // Separar las letras de "Cargando..." en spans para animarlas individualmente
  const text = "Cargando...";
  loadingText.innerHTML = text.split("").map((letter, index) => {
      return `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`;
  }).join("");

  // Función para simular el progreso de carga
  function updateProgress() {
      if (progress < blocks.length) {
          blocks[progress].classList.add("active");
          const numberSpan = blocks[progress].querySelector(".number");
          numberSpan.style.animation = `showNumber 0.8s forwards`; // Mostrar el número al activarse el bloque
          progress++;
          setTimeout(updateProgress, 700); // Ajusta el tiempo aquí para hacer la animación más lenta
      } else {
          // Cuando se completa la palabra, aplicar la animación de caída
          setTimeout(() => {
              loadingText.style.animation = "drop 0.8s forwards";
              
              // Redirigir a index.html después de la animación de caída
              setTimeout(() => {
                  window.location.href = "index.html";
              }, 800); // Tiempo suficiente para que termine la animación de caída
          }, 700);
      }
  }

  // Iniciar la carga simulada
  updateProgress();
});
