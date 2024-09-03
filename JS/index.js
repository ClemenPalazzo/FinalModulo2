function cargarServicios() {
  const listaJuegos = JSON.parse(localStorage.getItem('juegos')) || [];
  const tabla = document.querySelector('#padre1'); // Asegúrate de que '#padre1' existe en index.html

  tabla.innerHTML = ''; // Limpia el contenedor antes de añadir los elementos

  listaJuegos.forEach(juego => {
      const fila = document.createElement('div');
      fila.classList.add('container', 'my-5');

      fila.innerHTML = `
      <div class="d-flex justify-content-center">
          <div class="row">
              <div class="card h-100 card-video-game col-6">
                  <img src="${juego.imagenJuego}" class="card-img-top" alt="${juego.nombreJuego}" />
              </div>
              <div class="col-6 d-flex align-items-center">
                  <button class="btn btn-dark p-3 z-2" onclick="verServicio('${juego.id}')">Ver más...</button>
              </div>
          </div>
      </div>
      `;
      tabla.appendChild(fila);
  });
}

function verServicio(id) {
  window.location.href = `/pages/detalleProducto.html?id=${id}`;
}

document.addEventListener('DOMContentLoaded', cargarServicios);
