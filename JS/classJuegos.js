export default class Juego {
    #id;
    #nombreJuego;
    #descripcionJuego;
    #precioJuego;
    #duracionJuego;
    #tipoJuego;
    #imagenJuego;
    #reseñaJuego;

    constructor(nombreJuego, descripcionJuego, precioJuego, duracionJuego, tipoJuego, imagenJuego, reseñaJuego) {
        this.#id = crypto.randomUUID();
        this.#nombreJuego = nombreJuego;
        this.#descripcionJuego = descripcionJuego;
        this.#precioJuego = precioJuego;
        this.#duracionJuego = duracionJuego;
        this.#tipoJuego = tipoJuego;
        this.#imagenJuego = imagenJuego;
        this.#reseñaJuego = reseñaJuego;
    }

    // Getters y Setters

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }
    get nombreJuego() {
        return this.#nombreJuego;
    }
    set nombreJuego(value) {
        this.#nombreJuego = value;
    }
    get descripcionJuego() {
        return this.#descripcionJuego;
    }
    set descripcionJuego(value) {
        this.#descripcionJuego = value;
    }
    get precioJuego() {
        return this.#precioJuego;
    }
    set precioJuego(value) {
        this.#precioJuego = value;
    }
    get duracionJuego() {
        return this.#duracionJuego;
    }
    set duracionJuego(value) {
        this.#duracionJuego = value;
    }
    get tipoJuego() {
        return this.#tipoJuego;
    }
    set tipoJuego(value) {
        this.#tipoJuego = value;
    }
    get imagenJuego() {
        return this.#imagenJuego;
    }
    set imagenJuego(value) {
        this.#imagenJuego = value;
    }
    get reseñaJuego() {
        return this.#reseñaJuego;
    }
    set reseñaJuego(value) {
        this.#reseñaJuego = value;
    }

    // Método para que funcione JSON
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
        }
    }
}