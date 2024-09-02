// filtro.js

function filterProducts() {
    const input = document.getElementById('navbar-search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card-destacados, .promotion-card');

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Limpiar resultados previos

    cards.forEach((card) => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const cardContainer = card.closest('.col');

        if (title.includes(input)) {
            cardContainer.style.display = 'block';
            // Clonar la tarjeta y agregarla a los resultados de la búsqueda
            const clone = card.cloneNode(true);
            searchResults.appendChild(clone);
        } else {
            cardContainer.style.display = 'none';
        }
    });

    // Mostrar el modal si hay resultados
    if (searchResults.children.length > 0) {
        const modal = new bootstrap.Modal(document.getElementById('searchModal'));
        modal.show();
    }
}
