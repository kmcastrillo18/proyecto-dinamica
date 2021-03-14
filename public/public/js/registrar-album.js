'use strict';

const btn_registrar = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_lanzamiento = document.querySelector('#txt-lanzamiento');
const input_codigo = document.querySelector('#txt-codigo');
let album = [];

const validar = () => {
    let inputs_requeridos = document.querySelectorAll(':required');
    let error = false;

    inputs_requeridos.forEach(input => {
        if (input.value == '') {
            input.classList.add('error-input');
            error = true;
        } else {
            input.classList.remove('error-input');
        }
    });

    album.forEach(obj_album_registrado => {
        if (obj_album_registrado.nombre_album === input_nombre.value) {
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
            'title': 'El album se registro con exito.',
            'text': 'ok.'
            
        }).then(() => {
            limpiar();
            location.reload();
        });
        obtener_datos_album();
    }
};
const gestor = new Gestor();
const obtener_datos_album = async() => {
    

    let obj_album = new Album(input_codigo.value,input_nombre.value,Date(input_lanzamiento.value));

    gestor.registrar_album(obj_album);
};

btn_registrar.addEventListener('click', validar);

const limpiar = () => {
    input_codigo.value = '';
    input_nombre.value = '';
    input_lanzamiento.value = '';
    btn_registrar.value = '';
};