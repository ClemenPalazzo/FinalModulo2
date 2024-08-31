import { Contacto } from "./classContactos.js";

//Variables 
const Administrador = new Contacto ('Santiago', 'Rodriguez', 'Santirod7','santiara010@gmail.com','3813566953','santi123','hola')
console.log(Administrador)

const formularioLogin = document.getElementById('formLogin');
const emailL = document.getElementById('emailL');
const passwordL = document.getElementById('passwordL');
let n=false;

//funciones login
const analizarCuenta = (e) =>{
    e.preventDefault();
    if (emailL.value === Administrador.mail && passwordL.value === Administrador.contraseña){
        localStorage.setItem('Adminkey',JSON.stringify(Administrador));
        window.location.href = '../index.html'
    } else if (n == false){
        const error = document.createElement('h6');
        error.innerHTML = 'El email o la contraseña es incorrecta'
        error.className = 'text-center text-danger'
        formularioLogin.prepend (error)
        n = true;
    }
}
//logica del crud (Login)
formularioLogin.addEventListener('submit',analizarCuenta)