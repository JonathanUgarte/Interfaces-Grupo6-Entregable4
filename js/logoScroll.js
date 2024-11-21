window.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo');
    const header = document.querySelector('.header');
  
    // Ajusta el valor del desplazamiento según tu diseño
    if (window.scrollY > 200) {
      logo.classList.add('scrolled');
      header.classList.add('scrolled'); // Agrega la clase 'scrolled' al header si es necesario
    } else {
      logo.classList.remove('scrolled');
      header.classList.remove('scrolled');
    }
  });