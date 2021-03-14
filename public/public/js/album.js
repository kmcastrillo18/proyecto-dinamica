'use strict';

class Album {
    
    constructor(codigo, nombre_album, fecha_lanzamiento, cant_canciones, duracion,_id) {
        this.codigo = codigo;
        this.nombre_album = nombre_album;
        this.fecha_lanzamiento = fecha_lanzamiento;
        this.cant_canciones = cant_canciones;
        this.duracion = duracion;
        if (_id) {
            this._id = _id;
        }
        this.lista_cancion = [];
    }

    get_id() {
        return this._id;
    }
    set_id(_id) {
        this._id = _id;
    }

    get_codigo() {
        return this.codigo;
    }
    set_codigo(codigo) {
        this.codigo = codigo;
    }

    get_nombre_album() {
        return this.nombre_album;
    }
    set_nombre_album(nombre_album) {
        this.nombre_album = nombre_album;
    }

    get_lanzamiento() {
        return this.fecha_lanzamiento;
    }
    set_lanzamiento(fecha_lanzamiento) {
        this.fecha_lanzamiento = fecha_lanzamiento;
    }

    get_cant_canciones() {
        return this.cant_canciones;
    }
    set_cant_canciones(cant_canciones) {
        this.cant_canciones = cant_canciones;
    }

    get_duracion() {
        return this.duracion;
    }
    set_duracion(duracion) {
        this.duracion = duracion;
    }

    get_lista_cancion() {
        return this.lista_cancion;
    }
    set_lista_cancion(lista_cancion) {
        this.lista_cancion = lista_cancion;
    }

    agregar_cancion(cancion) {
        this.lista_cancion.push(cancion);
    }
}