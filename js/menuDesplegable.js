// Script para el menú hamburguesa
const menuIcon = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

// Al hacer clic en el icono, alternamos la clase 'active' en el icono y el menú
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
});

