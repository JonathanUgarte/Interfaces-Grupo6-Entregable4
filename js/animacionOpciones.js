document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');
    const opciones = document.querySelectorAll('.opciones li');

    // Función para abrir/cerrar el menú
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('active'); // Activa/desactiva la clase del menú

        if (menu.classList.contains('active')) {
            // Aplica animación progresiva a las opciones
            opciones.forEach((opcion, index) => {
                opcion.style.opacity = '0'; // Reinicia la opacidad antes de la animación
                opcion.style.animation = `menu-item-entry 0.5s ease-out forwards`;
                opcion.style.animationDelay = `${index * 0.3}s`;
            });
        } else {
            // Limpia las animaciones al cerrar
            opciones.forEach(opcion => {
                opcion.style.animation = '';
                opcion.style.opacity = '1'; // Restaura opacidad
            });
        }
    });
});

