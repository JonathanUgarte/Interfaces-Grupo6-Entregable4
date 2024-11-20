
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


// Seleccionamos los elementos
const character4 = document.getElementById("character-4");
const character5 = document.getElementById("character-5");
const textElements = document.getElementById("container-txt");
const imageFrames = document.getElementById("carrusel-img");

// Función para aplicar parallax en diferentes velocidades
function parallaxEffect() {
  const scrollPosition = window.scrollY;
  

  // Velocidades de los personajes
  if(scrollPosition < 1500){
      character4.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      character5.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      textElements.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  }
}

// Escucha el evento de scroll
window.addEventListener("scroll", parallaxEffect);

/*ANIMACION SPRITESHEET */
document.querySelector('.coin').style.animationDuration = '1s';