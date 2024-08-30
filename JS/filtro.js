// Datos de ejemplo del catálogo de productos
const products = [
    { name: "CyberPunk", img: "./img/DayGone.jpeg", description: "Juego CyberPunk" },

    { name: "Beyond Two Souls", img: "./img/Beyond Two Souls Poster.jpeg", description: "Juego Beyond Two Souls" },

 

    { name: "Memoria RAM 16GB", img: "./img/BioInfinity.jpeg", description: "Memoria RAM 16GB" },
    { name: "Fuente de Poder 500W", img: "./img/detroit.jpeg", description: "Fuente de Poder 500W" },
    // Añade más productos aquí
];

// Función para manejar la búsqueda
function handleSearch() {
    const query = document.getElementById("navSearchInput").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displaySearchResults(filteredProducts);
}

// Función para mostrar los resultados de la búsqueda en un modal
function displaySearchResults(products) {
    let modalContent = `<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Resultados de la búsqueda</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">`;

    if (products.length > 0) {
        products.forEach(product => {
            modalContent += `<div class="product-item"><img src="${product.img}" alt="${product.name}" class="img-fluid" /><h6>${product.name}</h6><p>${product.description}</p></div>`;
        });
    } else {
        modalContent += "<p>No se encontraron productos.</p>";
    }

    modalContent += `</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button></div></div></div>`;
    
    // Crear el modal
    const modalContainer = document.createElement("div");
    modalContainer.className = "modal fade";
    modalContainer.id = "searchModal";
    modalContainer.tabIndex = -1;
    modalContainer.role = "dialog";
    modalContainer.innerHTML = modalContent;
    document.body.appendChild(modalContainer);
    
    const searchModal = new bootstrap.Modal(modalContainer);
    searchModal.show();
}
