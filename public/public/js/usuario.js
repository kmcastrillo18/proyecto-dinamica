'use strict';

class Usuario {
    constructor(nombre, nacimiento, correo, genero, contrasenna, tipo_usuario) {
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.correo = correo;
        this.genero = genero;
        this.contrasenna = contrasenna;
        this.tipo_usuario = tipo_usuario;
    }

    get_nombre() {
        return this.nombre;
    }
    set_nombre(nombre) {
        this.nombre = nombre;
    }

    get_nacimiento() {
        return this.nacimiento;
    }
    set_nacimiento(nacimiento) {
        this.nacimiento = nacimiento;
    }

    get_correo() {
        return this.correo;
    }
    set_correo(correo) {
        this.correo = correo;
    }

    get_genero() {
        return this.genero;
    }
    set_genero(genero) {
        this.genero = genero;
    }

    get_contrasenna() {
        return this.contrasenna;
    }
    set_contrasenna(contrasenna) {
        this.contrasenna = contrasenna;
    }

    get_tipo_usuario() {
        return this.tipo_usuario;
    }
    set_tipo_usuario(tipo_usuario) {
        this.tipo_usuario = tipo_usuario;
    }
}