'use stritc';

class Administrador{
    constructor(nombre_admin, nacimiento, correo_admin, usuario, contrasenna_admin) {
        this.nombre_admin = nombre_admin;
        this.nacimiento = nacimiento;
        this.correo_admin = correo_admin;
        this.usuario = usuario;
        this.contrasenna_admin = contrasenna_admin;
    }

    get_nombre_admin() {
        return this.nombre_admin;
    }
    set_nombre_admin(nombre_admin) {
        this.nombre_admin = nombre_admin;
    }

    get_nacimiento() {
        return this.nacimiento;
    }
    set_nacimiento(nacimiento) {
        this.nacimiento = nacimiento;
    }

    get_correo_admin() {
        return this.correo_admin;
    }
    set_correo_admin(correo_admin) {
        this.correo_admin = correo_admin;
    }

    get_usuario() {
        return this.usuario;
    }
    set_usuario(usuario) {
        this.usuario = usuario;
    }

    get_contrasenna_admin() {
        return this.contrasenna_admin;
    }
    set_contrasenna_admin(contrasenna_admin) {
        this.contrasenna_admin = contrasenna_admin;
    }
}