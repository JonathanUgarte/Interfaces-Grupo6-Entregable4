document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const redirectButton = document.getElementById("redirectButton");
    const progressBar = document.querySelector(".progress");
    const progressText = document.querySelector(".progress-text");
  
    let progress = 0;
  
    const interval = setInterval(() => {
      progress += 1;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;
  
      if (progress >= 100) {
        clearInterval(interval);
        loader.classList.add("hidden");
        content.classList.remove("hidden");
      }
    }, 50); // Simula 5 segundos de carga
  
    redirectButton.addEventListener("click", () => {
      window.location.href = "https://www.example.com"; // Cambia a la URL deseada
    });
  });
