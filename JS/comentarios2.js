// Traemos los elementos del DOM que necesitamos
document.addEventListener("DOMContentLoaded", () => {
    const comentariosForm = document.getElementById("comentariosForm");
    const comentariosContainer = document.getElementById("comentariosContainer");
    const promedioCalificacionElement = document.getElementById(
      "promedioCalificacion"
    );
  
    // Funciones
    function cargarComentarios() {
      // Obtenemos los comentarios almacenados
      const comentarios = JSON.parse(localStorage.getItem("comentariosPagina2")) || [];
      comentariosContainer.innerHTML = "<h4>Comentarios:</h4>";
  
      // Mostramos los comentarios en el contenedor
      comentarios.forEach(({ nombre, comentario, calificacion }) => {
        const comentarioElement = document.createElement("div");
        comentarioElement.classList.add("comentario-container");
        comentarioElement.innerHTML = `
                  <strong>${nombre} :</strong>
                  <p>${comentario}</p>
                  <p>Calificación: ${calificacion} Estrellas</p>
                  <hr />
              `;
        comentariosContainer.appendChild(comentarioElement);
      });
  
      // Actualizamos la calificacion
      actualizarPromedioCalificacion(comentarios);
    }
  
    // Guardar comentarios en el local storage
    function guardarComentario(nombre, comentario, calificacion) {
      const comentarios = JSON.parse(localStorage.getItem("comentariosPagina2")) || [];
      comentarios.push({ nombre, comentario, calificacion });
      localStorage.setItem("comentariosPagina2", JSON.stringify(comentarios));
    }
  
    // Función para actualizar la calificación promedio
    function actualizarPromedioCalificacion(comentarios) {
      if (comentarios.length === 0) {
        promedioCalificacionElement.textContent = "No hay calificaciones aún.";
        return;
      }
  
      const totalcalificacion = comentarios.reduce(
        (suma, { calificacion }) => suma + parseInt(calificacion),
        0
      );
      const promedioCalificacion = (
        totalcalificacion / comentarios.length
      ).toFixed(1);
      promedioCalificacionElement.textContent = `Promedio: ${promedioCalificacion} Estrellas`;
    }
  
    // Cargamos los comentarios y las calificaciones
    cargarComentarios();
  
    // Manejamos los eventos necesarios
    comentariosForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const comentario = document.getElementById("comentario").value.trim();
      const calificacion = document.getElementById("calificacion").value;
  
      if (nombre && comentario && calificacion) {
        // Guardamos el nuevo comentario
        guardarComentario(nombre, comentario, calificacion);
        comentariosForm.reset();
        // Vuelve a cargar los comentarios para mostrar el nuevo
        cargarComentarios();
      }
    });
  });
  