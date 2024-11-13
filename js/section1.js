/* ======================== SECTION 1 HERO ================= */
const handleHeroScroll = () => {
    const section = document.getElementById('section-hero');
    const layers = section.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const y_pos = window.scrollY * speed;
        layer.style.transform = `translateY(${-y_pos}px)`;
    })
}