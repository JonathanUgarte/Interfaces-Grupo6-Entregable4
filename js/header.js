window.addEventListener("scroll", function() {
    const header = document.getElementById("header-animado");
    if (window.scrollY > 50) { // Ajusta el número de píxeles para el momento en que se reducirá el header
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
