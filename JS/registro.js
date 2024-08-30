import { Contacto } from "./classContactos.js";

//Variables
const Administrador = new Contacto ('Santiago', 'Rodriguez', 'Santirod7','santiara010@gmail.com','3813566953','santi123','hola')
console.log(Administrador)

//Variables Registro
const formularioRegistro = document.getElementById('formRegistro');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const nombreUsuario = document.getElementById('nombreUsuario');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const password = document.getElementById('password');
const rpassword = document.getElementById('rpassword');
const foto = document.getElementById('foto');
const listaUsuario = JSON.parse(localStorage.getItem('listaUsuariokey')) || [];

//Funciones Registro
const crearUsuario = (e) => {
e.preventDefault();
console.log("Desde la funcion crear contacto");
const nuevoUsuario= new Contacto(nombre.value, apellido.value, nombreUsuario.value, email.value, telefono.value, password.value, foto.value)
console.log(nuevoUsuario);
listaUsuario.push(nuevoUsuario)
console.log(listaUsuario);
limpiarForm();
localStorage.setItem('listaUsuariokey',JSON.stringify(listaUsuario));
}
const limpiarForm = () => {
    formularioRegistro.reset()
}


//lógica del crud (Registro)
formularioRegistro.addEventListener('submit',crearUsuario)
