const imagenesContainer = document.querySelector('.carrusel-images'); 
const imageness = document.querySelectorAll('.carrusel-images img');
let index = 0;

function slideCarrusel() {
  index++;
  if (index >= imageness.length) {
    index = 0;
  }
  imagenesContainer.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(slideCarrusel, 3000); // Cambia de imagen cada 3 segundos