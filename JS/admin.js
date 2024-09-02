// classJuego.js
export default class Juego {
  constructor(id, name, genre, platform, image) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.platform = platform;
    this.image = image;
  }
}

const modalJuego = new bootstrap.Modal(document.getElementById('modalAdminJuegos'));
const btnNuevo = document.getElementById('btnNuevo');
const formJuegos = document.getElementById('formJuegos');
const nombreJuego = document.getElementById('nombreJuego');
const generoJuego = document.getElementById('generoJuego');
const plataformaJuego = document.getElementById('plataformaJuego');
const imagenJuego = document.getElementById('imagenJuego');
const tabla = document.querySelector('tbody');

const listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey')) || [];
let estoyCreando = true;
let juegoAEditar;

const mostrarModal = () => {
  modalJuego.show();
}

const crearJuego = () => {
  estoyCreando = true;
  const id = Date.now().toString(); // Generar un ID único basado en la fecha
  if (validarCantidadCaracteres(nombreJuego, 3, 30) && validarUrl(imagenJuego)) {
    const nuevoJuego = new Juego(id, nombreJuego.value, generoJuego.value, plataformaJuego.value, imagenJuego.value);
    listaJuegos.push(nuevoJuego);
    guardarEnLocalStorage();
    dibujarFila(nuevoJuego); // Asegúrate de llamar a dibujarFila después de guardar
    limpiarFormJuegos();
  } else {
    console.log('Hay errores en la carga');
  }
}

const limpiarFormJuegos = () => {
  formJuegos.reset();
  formJuegos.querySelectorAll('.form-control').forEach(control => {
    control.classList.remove('is-valid', 'is-invalid');
  });
}

const guardarEnLocalStorage = () => {
  localStorage.setItem('listaJuegosKey', JSON.stringify(listaJuegos));
}

const cargaJuegosInicial = () => {
  if (listaJuegos.length > 0) {
    listaJuegos.forEach(juego => dibujarFila(juego));
  }
}

const dibujarFila = (juego) => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${juego.name}</td>
    <td><img src="${juego.image}" class="img-thumbnail" style="width: 60px;"></td>
    <td>${juego.genre}</td>
    <td>${juego.platform}</td>
    <td>
      <button class="btn btn-success" onclick="verJuego('${juego.id}')">Ver</button>
      <button class="btn btn-warning" onclick="prepararJuego('${juego.id}')">Editar</button>
      <button class="btn btn-danger" onclick="borrarJuego('${juego.id}')">Borrar</button>
    </td>
  `;
  tabla.appendChild(fila);
}

window.borrarJuego = (id) => {
  Swal.fire({
    title: "¿Estás seguro de borrar el juego?",
    text: "No puedes recuperar el juego después de borrarlo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#a600f9",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      const index = listaJuegos.findIndex(juego => juego.id === id);
      if (index !== -1) {
        listaJuegos.splice(index, 1);
        guardarEnLocalStorage();
        tabla.deleteRow(index); // Asegúrate de que este índice es correcto
        Swal.fire("Borrado", "El juego fue eliminado", "success");
      }
    }
  });
}

window.prepararJuego = (id) => {
  estoyCreando = false;
  mostrarModal();
  juegoAEditar = listaJuegos.find(juego => juego.id === id);
  if (juegoAEditar) {
    nombreJuego.value = juegoAEditar.name;
    generoJuego.value = juegoAEditar.genre;
    plataformaJuego.value = juegoAEditar.platform;
    imagenJuego.value = juegoAEditar.image;
  }
}

window.verJuego = (id) => {
  window.location.href = `/pages/detalleJuego.html?id=${id}`;
}

const administrarJuego = (e) => {
  e.preventDefault();
  if (estoyCreando) {
    crearJuego();
  } else {
    modificarJuego();
  }
}

const modificarJuego = () => {
  const index = listaJuegos.findIndex(juego => juego.id === juegoAEditar.id);
  if (validarCantidadCaracteres(nombreJuego, 3, 30) && validarUrl(imagenJuego)) {
    listaJuegos[index].name = nombreJuego.value;
    listaJuegos[index].genre = generoJuego.value;
    listaJuegos[index].platform = plataformaJuego.value;
    listaJuegos[index].image = imagenJuego.value;
    guardarEnLocalStorage();
    actualizarFilaEnTabla(index);
    limpiarFormJuegos();
    estoyCreando = true;
    modalJuego.hide();
  } else {
    console.log('Hay errores en la carga');
  }
}

const actualizarFilaEnTabla = (index) => {
  const fila = tabla.children[index];
  fila.innerHTML = `
    <td>${listaJuegos[index].name}</td>
    <td><img src="${listaJuegos[index].image}" class="img-thumbnail" style="width: 60px;"></td>
    <td>${listaJuegos[index].genre}</td>
    <td>${listaJuegos[index].platform}</td>
    <td>
      <button class="btn btn-success" onclick="verJuego('${listaJuegos[index].id}')">Ver</button>
      <button class="btn btn-warning" onclick="prepararJuego('${listaJuegos[index].id}')">Editar</button>
      <button class="btn btn-danger" onclick="borrarJuego('${listaJuegos[index].id}')">Borrar</button>
    </td>
  `;
}

btnNuevo.addEventListener('click', mostrarModal);
formJuegos.addEventListener('submit', administrarJuego);
cargaJuegosInicial();