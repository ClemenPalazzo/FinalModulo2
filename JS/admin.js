class Juego {
    constructor(id, nombreJuego, descripcionJuego, precioJuego, duracionJuego, tipoJuego, imagenJuego, reseñaJuego) {
        this.id = id || this.generarId();
        this.nombreJuego = nombreJuego;
        this.descripcionJuego = descripcionJuego;
        this.precioJuego = precioJuego;
        this.duracionJuego = duracionJuego;
        this.tipoJuego = tipoJuego;
        this.imagenJuego = imagenJuego;
        this.reseñaJuego = reseñaJuego;
    }

    generarId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    toJSON() {
        return {
            id: this.id,
            nombreJuego: this.nombreJuego,
            descripcionJuego: this.descripcionJuego,
            precioJuego: this.precioJuego,
            duracionJuego: this.duracionJuego,
            tipoJuego: this.tipoJuego,
            imagenJuego: this.imagenJuego,
            reseñaJuego: this.reseñaJuego
        };
    }
}

function guardarJuegos(juegos) {
    localStorage.setItem('juegos', JSON.stringify(juegos.map(juego => juego.toJSON())));
}

function cargarJuegos() {
    const juegosJSON = localStorage.getItem('juegos');
    if (juegosJSON) {
        const juegosArray = JSON.parse(juegosJSON);
        return juegosArray.map(j => new Juego(j.id, j.nombreJuego, j.descripcionJuego, j.precioJuego, j.duracionJuego, j.tipoJuego, j.imagenJuego, j.reseñaJuego));
    }
    return [];
}

let juegos = cargarJuegos();

function renderizarTabla() {
    const tbody = document.querySelector('#tablaServicios');
    tbody.innerHTML = '';

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
                <button class="btn btn-primary btn-sm ver-detalle" data-id="${juego.id}">Ver</button>
                <button class="btn btn-warning btn-sm editar-juego" data-id="${juego.id}">Editar</button>
                <button class="btn btn-danger btn-sm eliminar-juego" data-id="${juego.id}">Eliminar</button>
            </td>
        `;
        tbody.appendChild(fila);
    });

    // Asignar eventos a los botones después de que se hayan creado
    document.querySelectorAll('.ver-detalle').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            verDetalleJuego(id);
        });
    });

    document.querySelectorAll('.editar-juego').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            editarJuego(id);
        });
    });

    document.querySelectorAll('.eliminar-juego').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            eliminarJuego(id);
        });
    });
}

document.getElementById('btnNuevo').addEventListener('click', () => {
    abrirModal();
});

window.verDetalleJuego = (id) => {
    window.location.href = `/pages/detalleProducto.html?id=${id}`;
};

function abrirModal(juego = null) {
    const modalLabel = document.getElementById('juegoModalLabel');
    const juegoForm = document.getElementById('juegoForm');
    const juegoId = document.getElementById('juegoId');
    const nombreJuego = document.getElementById('nombreJuego');
    const descripcionJuego = document.getElementById('descripcionJuego');
    const precioJuego = document.getElementById('precioJuego');
    const duracionJuego = document.getElementById('duracionJuego');
    const tipoJuego = document.getElementById('tipoJuego');
    const imagenJuego = document.getElementById('imagenJuego');
    const reseñaJuego = document.getElementById('reseñaJuego');

    if (juego) {
        modalLabel.textContent = 'Editar Juego';
        juegoId.value = juego.id;
        nombreJuego.value = juego.nombreJuego;
        descripcionJuego.value = juego.descripcionJuego;
        precioJuego.value = juego.precioJuego;
        duracionJuego.value = juego.duracionJuego;
        tipoJuego.value = juego.tipoJuego;
        imagenJuego.value = juego.imagenJuego;
        reseñaJuego.value = juego.reseñaJuego;
    } else {
        modalLabel.textContent = 'Agregar Juego';
        juegoForm.reset();
        juegoId.value = '';
    }

    const modal = new bootstrap.Modal(document.getElementById('juegoModal'));
    modal.show();

    juegoForm.onsubmit = function (event) {
        event.preventDefault();

        const nuevoJuego = new Juego(
            juegoId.value || null,
            nombreJuego.value,
            descripcionJuego.value,
            precioJuego.value,
            duracionJuego.value,
            tipoJuego.value,
            imagenJuego.value,
            reseñaJuego.value
        );

        if (juegoId.value) {
            const index = juegos.findIndex(j => j.id === juegoId.value);
            juegos[index] = nuevoJuego;
        } else {
            juegos.push(nuevoJuego);
        }

        guardarJuegos(juegos);
        renderizarTabla();
        modal.hide();
    };
}

function editarJuego(id) {
    const juego = juegos.find(j => j.id === id);
    abrirModal(juego);
}

function eliminarJuego(id) {
    juegos = juegos.filter(j => j.id !== id);
    guardarJuegos(juegos);
    renderizarTabla();
}

document.addEventListener('DOMContentLoaded', renderizarTabla);
