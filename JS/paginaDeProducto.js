const parametroId = new URLSearchParams(window.location.search).get("id");

const gamesLista = JSON.parse(localStorage.getItem("games")) || [];

  console.log(games)

const gameBuscado = gamesLista.find(
  (games) => games.id === parametroId
);
console.log(gamesLista)

const seccionDeInformacion = document.querySelector("#padre");

seccionDeInformacion.innerHTML = ` 
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 mt-lg-4">
      <img
        src="${juegoBuscado.name}"
        class="img-fluid sombra-violeta"
        alt="Imagen de ${servicioBuscado.nombreServicio}"
      />
    </div>
    <div class="col-md-6">
      <div class="service-card-body">
        <h2 class="service-title resaltado p-2 mb-4 mt-4">
          ${servicioBuscado.nombreServicio}
        </h2>
        <div class="highlight">
          <p>
            <mark class="text-decoration-underline">Precio:</mark>
            ${servicioBuscado.precioServicio}
          </p>
          <p>
            <mark class="text-decoration-underline">Tiempo de entrega:</mark>
            ${servicioBuscado.tiempoServicio}
          </p>
        </div>
        <p>
          <mark class="text-decoration-underline">Descripción:</mark>
          ${servicioBuscado.descripcionServicio}
        </p>
        <button class="btn btn-light botones-servicios mb-3">
          Agregar al Carrito
        </button>
      </div>
    </div>
  </div>` 
