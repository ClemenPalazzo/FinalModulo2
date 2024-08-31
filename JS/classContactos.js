export class Contacto {
  #id;
  #nombre;
  #apellido;
  #nombreUsuario;
  #mail;
  #telefono
  #password;
  #foto;

  constructor(nombre, apellido, nombreUsuario, mail, telefono, password, foto) {
    this.#id = crypto.randomUUID();
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#nombreUsuario=nombreUsuario
    this.#mail = mail;
    this.#telefono = telefono;
    this.#password = password;
    this.#foto = foto;
  }
  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(value) {
    this.#nombre = value;
  }
  get apellido() {
    return this.#apellido;
  }
  set apellido(value) {
    this.#apellido = value;
  }
  get nombreUsuario() {
    return this.#nombreUsuario;
  }
  set nombreUsuario(value) {
    this.#nombreUsuario = value;
  }
  get mail() {
    return this.#mail;
  }
  set mail(value) {
    this.#mail = value;
  }
  get telefono() {
    return this.#telefono;
  }
  set telefono(value) {
    this.#telefono = value;
  }
  get password() {
    return this.#password;
  }
  set password(value) {
    this.#password = value;
  }
  get foto() {
    return this.#foto;
  }
  set foto(value) {
    this.#foto = value;
  }
  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      nombreUsuario: this.nombreUsuario,
      mail: this.mail,
      telefono: this.telefono,
      password: this.password,
      foto: this.foto,
    };
  }
}
