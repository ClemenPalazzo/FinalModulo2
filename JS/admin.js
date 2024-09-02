
function guardarJuegos(juegos) {
    localStorage.setItem('juegos', JSON.stringify(juegos.map(juego => juego.toJSON())));
}

// Cargar juegos desde localStorage
function cargarJuegos() {
    const juegosJSON = localStorage.getItem('juegos');
    if (juegosJSON) {
        const juegosArray = JSON.parse(juegosJSON);
        return juegosArray.map(j => {
            const juego = new Juego(j.nombreJuego, j.descripcionJuego, j.precioJuego, j.duracionJuego, j.tipoJuego, j.imagenJuego, j.reseñaJuego);
            juego.id = j.id; // Establecer el ID ya que es generado al crear el juego
            return juego;
        });
    }
    return [];}

    let juegos = cargarJuegos();

// Renderizar la tabla
function renderizarTabla() {
    const tbody = document.querySelector('#tablaServicios');
    tbody.innerHTML = ''; // Limpiar la tabla antes de renderizar

    juegos.forEach(juego => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${juego.nombreJuego}</td>
            <td>${juego.descripcionJuego}</td>
            <td>${juego.precioJuego}</td>
            <td>${juego.duracionJuego}</td>
            <td>${juego.tipoJuego}</td>
            <td><img src="${juego.imagenJuego}" alt="${juego.nombreJuego}" width="100"></td>
            <td>${juego.reseñaJuego}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editarJuego('${juego.id}')">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarJuego('${juego.id}')">Eliminar</button>
            </td>
        `;
        tbody.appendChild(fila);
    });
}

// Agregar un nuevo juego
document.getElementById('btnNuevo').addEventListener('click', () => {
    const nombreJuego = prompt("Nombre del juego:");
    const descripcionJuego = prompt("Descripción del juego:");
    const precioJuego = prompt("Precio del juego:");
    const duracionJuego = prompt("Duración del juego:");
    const tipoJuego = prompt("Tipo del juego:");
    const imagenJuego = prompt("URL de la imagen del juego:");
    const reseñaJuego = prompt("Reseña del juego:");

    if (nombreJuego && descripcionJuego && precioJuego && duracionJuego && tipoJuego && imagenJuego && reseñaJuego) {
        const nuevoJuego = new Juego(nombreJuego, descripcionJuego, precioJuego, duracionJuego, tipoJuego, imagenJuego, reseñaJuego);
        juegos.push(nuevoJuego);
        guardarJuegos(juegos);
        renderizarTabla();
    }
});

// Editar un juego
function editarJuego(id) {
    const juego = juegos.find(j => j.id === id);
    if (juego) {
        const nuevoNombre = prompt("Nuevo nombre del juego:", juego.nombreJuego);
        const nuevaDescripcion = prompt("Nueva descripción del juego:", juego.descripcionJuego);
        const nuevoPrecio = prompt("Nuevo precio del juego:", juego.precioJuego);
        const nuevaDuracion = prompt("Nueva duración del juego:", juego.duracionJuego);
        const nuevoTipo = prompt("Nuevo tipo del juego:", juego.tipoJuego);
        const nuevaImagen = prompt("Nueva URL de la imagen del juego:", juego.imagenJuego);
        const nuevaReseña = prompt("Nueva reseña del juego:", juego.reseñaJuego);

        if (nuevoNombre && nuevaDescripcion && nuevoPrecio && nuevaDuracion && nuevoTipo && nuevaImagen && nuevaReseña) {
            juego.nombreJuego = nuevoNombre;
            juego.descripcionJuego = nuevaDescripcion;
            juego.precioJuego = nuevoPrecio;
            juego.duracionJuego = nuevaDuracion;
            juego.tipoJuego = nuevoTipo;
            juego.imagenJuego = nuevaImagen;
            juego.reseñaJuego = nuevaReseña;
            guardarJuegos(juegos);
            renderizarTabla();
        }
    }
}

// Eliminar un juego
function eliminarJuego(id) {
    juegos = juegos.filter(j => j.id !== id);
    guardarJuegos(juegos);
    renderizarTabla();
}

// Inicializar la tabla al cargar la página
document.addEventListener('DOMContentLoaded', renderizarTabla);