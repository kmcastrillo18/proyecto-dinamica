'use strict';

const boton = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_duracion= document.querySelector('#txt-duracion');

const gestor = new Gestor();

let cancion_seleccionado;
if (localStorage.getItem('cancion_seleccionado')) {
    cancion_seleccionado = JSON.parse(localStorage.getItem('cancion_seleccionado'));
}

const llenar_formulario = () => {
    input_nombre.value = cancion_seleccionado.nombre;
    input_duracion.value = cancion_seleccionado.duracion;
    
};

const obtener_info_cancion = () => {
    let cancion = new Cancion(input_nombre.value, input_duracion.value);
    cancion.set_id(cancion_seleccionado._id);
    gestor.modificar_cancion(cancion);
}

llenar_formulario();
boton.addEventListener('click', obtener_info_cancion);