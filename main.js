// Animación de transición de página (solo un ejemplo de dinamismo)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
