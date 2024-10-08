// Obtener el parámetro 'id' de la URL
const parametroId = new URLSearchParams(window.location.search).get("id");

// Obtener los juegos desde localStorage
const juegos = JSON.parse(localStorage.getItem("juegos")) || [];

// Buscar el juego por su id
const juegoBuscado = juegos.find((juego) => juego.id === parametroId);

if (juegoBuscado) {
  // Obtener la sección donde se mostrará la información
  const seccionDeInformacion = document.getElementById("anda");

  // Insertar la información del juego en la sección
  seccionDeInformacion.innerHTML = `
      <div class="game-header contenedor-imagen-producto">
           <img class=" imagen-producto" src="${juegoBuscado.imagenJuego}" alt="${juegoBuscado.nombreJuego}">
      </div>     
           <div >
               <h1><mark>${juegoBuscado.nombreJuego}</h1>

               <a href="#" class="btn btn-light boton-cambiando-color w-100 my-4">Comprar</a>

               <p> <mark>Precio:</mark> ${juegoBuscado.precioJuego}</p>
               <p><mark>Categoría:</mark> ${juegoBuscado.categoriaJuego}</p>
               <p><mark>Desarrollador:</mark> ${juegoBuscado.desarrolladorJuego}</p>
              
           </div>
       </div>
      <div class="game-details">
           <h2><mark>Descripción</mark></h2>
           <p>${juegoBuscado.descripcionJuego}</p>
       </div>
      <div class="game-details">
           <h2><mark>Requisitos del Sistema</mark></h2>
           <p>${juegoBuscado.requisitosJuego}</p>
       </div>
      <div class="reviews">
        <h2><mark>Reseñas </mark></h2>
        <p>${juegoBuscado.reseñaJuego}</p>
        

      </div>`;
} else {
  console.error("Juego no encontrado");
}
