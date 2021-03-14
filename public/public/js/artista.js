'use strict';

class Artista{
    constructor(nombre,casa_disquera,nacimiento,_id){
        this.nombre = nombre;
        this.casa_disquera = casa_disquera;
        this.nacimiento = nacimiento;
        if (_id) {
            this._id = _id;
        }
        this.lista_album = [];
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
    get_casa_disquera() {
        return this.casa_disquera;
    }
    set_casa_disquera(casa_disquera) {
        this.casa_disquera = casa_disquera;
    }
    get_nacimiento() {
        return this.nacimiento;
    }
    set_nacimiento(nacimiento) {
        this.nacimiento = nacimiento;
    }

    calc_edad(){
       
        let fecha_nacimiento = new Date(this.get_nacimiento());
        let hoy = new Date();
        let edad = new Date(hoy-fecha_nacimiento.getTime());
        return Math.abs(edad.getUTCFullYear());   
    }

    agregar_album(album) {

        this.lista_album.push(album);
    }
}