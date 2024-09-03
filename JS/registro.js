import { Contacto } from "./classContactos.js";
import { validarCaracteres} from "./validacionRegistro.js";
import { validarEmail } from "./validacionRegistro.js";


//Variables
const Administrador = new Contacto ('Santiago', 'Rodriguez', 'Santirod7','santiara010@gmail.com','3813566953','santi123')

//Variables Registro
const formularioRegistro = document.getElementById('formRegistro');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const nombreUsuario = document.getElementById('nombreUsuario');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const password = document.getElementById('password');
const rpassword = document.getElementById('rpassword');
const listaUsuario = JSON.parse(localStorage.getItem('listaUsuariokey')) || [];

//Funciones Registro
function validarPassword(password){
    const valPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(valPass.test(password.value)){
       password.className = 'form-control is-valid'
       return valPass.test(password.value)
    }else{
        alert("Error! El password debe contener al menos una minúscula, mayúscula, número y un carácter especial. Y 8 carácteres como mínimo")
      password.className = 'form-control is-invalid'
    }
  }

const crearUsuario = (e) => {
e.preventDefault();
console.log(rpassword.value)
console.log(password.value)
if (validarCaracteres(nombre,3,25) && validarCaracteres(apellido, 3, 25) && validarCaracteres(nombreUsuario,3,20) && validarEmail(email) && validarPassword(password) && validarPassword(rpassword)){
    if(password.value == rpassword.value){
        const nuevoUsuario= new Contacto(nombre.value, apellido.value, nombreUsuario.value, email.value, telefono.value, password.value)
        console.log(nuevoUsuario);
        listaUsuario.push(nuevoUsuario)
        console.log(listaUsuario);
        limpiarForm();
        localStorage.setItem('listaUsuariokey',JSON.stringify(listaUsuario));
    }else{
        alert('Error! Las contraseñas no coinciden');
    }
    } else {
        alert('Error! form');
    }
}
const limpiarForm = () => {
    formularioRegistro.reset()
    nombre.className = 'form-control'
    apellido.className = 'form-control'
    nombreUsuario.className = 'form-control'
    telefono.className = 'form-control'
    email.className = 'form-control'
    password.className = 'form-control'
    rpassword.className = 'form-control'
}


//lógica del crud (Registro)
formularioRegistro.addEventListener('submit',crearUsuario)