document.addEventListener('DOMContentLoaded', () => {
    const categorias = document.querySelectorAll('.categoria');
    const paquetes = document.querySelectorAll('.paquete');

    function mostrarCategoria(categoria) {
        paquetes.forEach(p => {
            p.style.display = (p.dataset.categoria === categoria) ? 'block' : 'none';
        });
    }

    categorias.forEach(cat => {
        cat.addEventListener('click', () => {
            categorias.forEach(c => c.classList.remove('active'));
            cat.classList.add('active');
            mostrarCategoria(cat.dataset.categoria);
        });
    });

    // Mostrar la categoría activa al cargar la página
    const catActiva = document.querySelector('.categoria.active').dataset.categoria;
    mostrarCategoria(catActiva);
});
