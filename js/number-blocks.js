document.addEventListener('DOMContentLoaded', () => {
    // Selecciona la sección específica para limitar el área de movimiento
    const section = document.querySelector('.numberblocks-section');
    const image = document.querySelector('.main-image');
    
    if (!section || !image) {
        console.error("Elemento no encontrado. Verifica las clases 'numberblocks-section' y 'numberblocks'.");
        return;
    }

    section.addEventListener('mousemove', (event) => {
        // Obtenemos las dimensiones de la sección y la posición del mouse en la sección
        const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = section;
        const clientX = event.clientX - offsetLeft;
        const clientY = event.clientY - offsetTop;
        
        // Calculamos la posición de la imagen en dirección opuesta al mouse
        const offsetX = (clientX / offsetWidth - 0.5) * -20;
        const offsetY = (clientY / offsetHeight - 0.5) * -20;

        // Aplicamos la transformación a la imagen
        image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        
        // Debugging: verificar valores
        console.log({ offsetX, offsetY });
    });
});
