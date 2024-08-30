import { Contacto } from "./classContactos.js";

//Variables 
const Administrador = new Contacto ('Santiago', 'Rodriguez', 'Santirod7','santiara010@gmail.com','3813566953','santi123','hola')
console.log(Administrador)

const formularioLogin = document.getElementById('formLogin');
const emailL = document.getElementById('emailL');
const passwordL = document.getElementById('passwordL');

//funciones login
const analizarCuenta = (e) =>{
    e.preventDefault();
    if (emailL.value === Administrador.mail && passwordL.value === Administrador.contraseña){
console.log("dentro del if")
window.location.href = '../index.html'
    }
}
//logica del crud (Login)
formularioLogin.addEventListener('submit',analizarCuenta)