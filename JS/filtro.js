const products = [
    { name: "CyberPunk", img: "./img/DayGone.jpeg", description: "Juego CyberPunk" },
    { name: "Beyond two souls", img: "./img/Beyond Two Souls Poster.jpeg", description: "Juego Beyond Two Souls" },
    { name: "Infinity", img: "/img/Stray.jpeg", description: "Stray" },
    { name: "Death stranding", img: "./img/Death Stranding art.jpeg", description: "Death stranding" },
    { name: "Infinity", img: "./img/BioInfinity.jpeg", description: "Bioshok infinity" },
    { name: "Detroit", img: "./img/detroit.jpeg", description: "Detroit become humane" },
];

document.getElementById("navSearchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        handleSearch();
    }
});

function handleSearch() {
    const query = document.getElementById("navSearchInput").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displaySearchResults(filteredProducts);
}

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
