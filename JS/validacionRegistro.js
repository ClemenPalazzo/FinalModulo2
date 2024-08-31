export function validarCaracteres(input, min, max) {
    if (input.value.trim().length >= min && input.value.trim().length <= max) {
      input.className = 'form-control is-valid'
      return true;
    } else {
      input.className = 'form-control is-invalid'
      return false;
    }
  }
  
  export function validarEmail(input){
    const regExp= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(regExp.test(input.value)){
       input.className = 'form-control is-valid'
       return true
    }else{
      input.className = 'form-control is-invalid'
      return false;
    }
  }
  export function validarPassword(input){
    const valPass = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/
    if(input.value.match(valPass)){
       input.className = 'form-control is-valid'
       alert("El password es seguro !")
    }else{
        alert("Error! El password debe contener al menos una minúscula, mayúscula, número y un carácter especial. Y 8 carácteres como mínimo")
      input.className = 'form-control is-invalid'
    }
  }