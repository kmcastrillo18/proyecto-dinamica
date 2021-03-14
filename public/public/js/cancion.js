'use strict';
class Cancion{
    

    constructor(nombre,duracion,nombre_artista,nombre_album,_id){
        this.nombre = nombre;
        this.duracion = duracion;
        this.nombre_artista = nombre_artista;
        this.nombre_album = nombre_album;
        if (_id) {
            this._id = _id;
        }
    }

    get_id() {
        return this._id;
    }
    set_id(_id) {
        this._id = _id;
    }

    get_nombre() {
        return this.nombre;
    }
    set_nombre(nombre) {
        this.nombre = nombre;
    }

    get_duracion() {
        return this.duracion;
    }
    set_duracion(duracion) {
        this.duracion = duracion;
    }

    get_nombre_artista() {
        return this.nombre_artista;
    }
    set_nombre_artista(nombre_artista) {
        this.nombre_artista = nombre_artista;
    }

    get_nombre_album() {
        return this.nombre_album;
    }
    set_nombre_album(nombre_album) {
        this.nombre_album = nombre_album;
    }
}