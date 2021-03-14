'use strict';

const btn_registrar = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_duracion= document.querySelector('#txt-duracion');

let coleccion_cancion = [];

const validar = () => {
    let inputs_requeridos = document.querySelectorAll(':required');
    let error = false;

    inputs_requeridos.forEach(input => {
        if (input.value == '') {
            input.classList.add('error');
            error = true;
        } else {
            input.classList.remove('error');
        }
    });

    coleccion_cancion.forEach(obj_cancion => {
        if (obj_cancion.nombre_cancion === input_nombre.value) {
            error = true;
            return;
        } else {
            error = false;
        }
    });

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'text': 'Por favor revise los campos resaltados o '
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'La canción se registro con exito.',
            'text': 'ok.'
            
        }).then(() => {
            limpiar();
            location.reload();
        });
        obtener_datos_cancion();
    }
};


const gestor = new Gestor();

const obtener_datos_cancion = async() => {
    

    let cancion = new Cancion(input_nombre.value,Number(input_duracion.value));

    gestor.registrar_cancion(cancion);
};


btn_registrar.addEventListener('click', validar);

const limpiar = () => {
    input_nombre.value = '';
    input_duracion.value = '';
    boton.value = '';
};