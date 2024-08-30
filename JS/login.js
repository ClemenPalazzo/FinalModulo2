import { Contacto } from "./classContactos.js";

//Variables
const Administrador = new Contacto ('Damian', 'Barreiro','Damianb@gmail.com','D1234','')
console.log(Administrador)
const formularioRegistro = document.getElementById('formRegistro');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const nombreUsuario = document.getElementById('nombreUsuario');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const password = document.getElementById('password');
const rpassword = document.getElementById('rpassword');
const foto = document.getElementById('foto');
const listaUsuario = []


//Funciones
const crearUsuario = (e) => {
e.preventDefault();
console.log("Desde la funcion crear contacto");
const nuevoUsuario= new Contacto(nombre.value, apellido.value, nombreUsuario.value, email.value, telefono.value, password.value, rpassword.value, foto.value)
console.log(nuevoUsuario);
listaUsuario.push(nuevoUsuario)
console.log(listaUsuario);
limpiarForm();
localStorage.setItem('key',JSON.stringify(listaUsuario));
}
const limpiarForm = () => {
    formularioRegistro.reset()
}


//lógica del crud
formularioRegistro.addEventListener('submit',crearUsuario)