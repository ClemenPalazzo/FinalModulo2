export class Contacto {
  #id;
  #nombre;
  #apellido;
  #mail;
  #contraseña;
  #foto;

  constructor(nombre, apellido, mail, contraseña, foto) {
    this.#id = crypto.randomUUID();
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#mail = mail;
    this.#contraseña = contraseña;
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
  get mail() {
    return this.#mail;
  }
  set mail(value) {
    this.#mail = value;
  }
  get contraseña() {
    return this.#contraseña;
  }
  set contraseña(value) {
    this.#contraseña = value;
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
      mail: this.mail,
      foto: this.foto,
    };
  }
}
