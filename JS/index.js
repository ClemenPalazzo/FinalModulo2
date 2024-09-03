function cargarServicios() {
    const listaJuegos = JSON.parse(localStorage.getItem('juegos')) || [];
    const tabla = document.querySelector('#padre1');

    tabla.innerHTML = '';

    listaJuegos.forEach(juego => {
        const fila = document.createElement('div');
        fila.classList.add( 'container', 'my-5');

        fila.innerHTML = `


      <div class="d-flex justify-content-center ">
        <div class="row">
          <div class="card h-100 card-video-game col-6">
            <img src="${juego.imagenJuego}" class="card-img-top" alt="${juego.nombreJuego}" />
          </div>
           <button class="btn btn-dark p-3 z-2" onclick="verServicio('${juego.id}')">Ver más...</button>
        </div>
        `;
        tabla.appendChild(fila);
    });
}

function verServicio(id) {
    window.location.href = `/pages/detalleProducto.html?id=${id}`;
}

window.addEventListener('storage', (event) => {
    console.log('Storage event detected:', event);
    if (event.key === 'juegos') {
        cargarServicios();
    }
});

document.addEventListener('DOMContentLoaded', cargarServicios);