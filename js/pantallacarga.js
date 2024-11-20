document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".progress-bar .block");
    const loadingText = document.querySelector(".loading-text");
    let progress = 0;
  
    // Separar las letras de "Cargando..." en spans para animarlas individualmente
    const text = "Cargando...";
    loadingText.innerHTML = text
      .split("")
      .map((letter, index) => {
        return `<span style="animation-delay: ${index * 0.4}s">${letter}</span>`;
      })
      .join("");
  
    // Función para simular el progreso de carga
    function updateProgress() {
      if (progress < blocks.length) {
        // Activar el bloque actual
        blocks[progress].classList.add("active");
        const numberSpan = blocks[progress].querySelector(".number");
        numberSpan.style.animation = `showNumber 0.8s forwards`;
  
        // Si hay un bloque anterior, desvanecer el número
        if (progress > 0) {
          const prevBlock = blocks[progress - 1];
          const prevNumberSpan = prevBlock.querySelector(".number");
          prevNumberSpan.style.animation = `fadeOut 0.5s forwards`; // Desvanecer número
        }
  
        progress++;
        setTimeout(updateProgress, 700); // Continuar al siguiente bloque
      } else {
        // Una vez completado, ocultar el texto de carga y redirigir
        setTimeout(() => {
          loadingText.style.animation = "drop 0.8s forwards";
          setTimeout(() => {
            window.location.href = "index.html";
          }, 800);
        }, 700);
      }
    }
  
    // Iniciar la carga simulada
    updateProgress();
  });
  