const productos = [
  { nombre: 'CyberPunk', imagen: './img/CyberPunk.jpeg', precio: '$60.00' },
  { nombre: 'Beyond Two Souls', imagen: './img/Beyond Two Souls Poster.jpeg', precio: '$50.00' },
  { nombre: 'BioInfinity', imagen: './img/BioInfinity.jpeg', precio: '$45.00' },
  { nombre: 'Detroit', imagen: './img/detroit.jpeg', precio: '$55.00' },
  // Agrega más productos aquí
];
function handleSearch(event) {
  if (event.key === 'Enter') {
      openCatalog();
      event.preventDefault(); // Previene el comportamiento por defecto de recargar la página
  }
}

function openCatalog() {
  const searchInput = document.getElementById('navSearchInput').value.toLowerCase();
  const catalogContainer = document.getElementById('catalogContainer');
  
  // Limpiar los resultados previos
  catalogContainer.innerHTML = '';

  // Filtrar productos
  const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(searchInput));
  
  // Mostrar resultados
  resultados.forEach(producto => {
      const productHTML = `
          <div class="col-md-4 mb-3">
              <div class="card h-100">
                  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                  <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">Precio: ${producto.precio}</p>
                  </div>
              </div>
          </div>`;
      catalogContainer.innerHTML += productHTML;
  });

  // Abrir el modal
  const catalogModal = new bootstrap.Modal(document.getElementById('catalogModal'));
  catalogModal.show();
}

