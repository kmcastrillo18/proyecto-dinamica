'use strict';

const btn_registrar = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_nacimiento = document.querySelector('#txt-nacimiento');
const input_correo = document.querySelector('#txt-correo');
const slt_genero = document.querySelector('#slt-genero');
const input_contrasenna = document.querySelector('#txt-contrasenna');
const slt_usuario = document.querySelector('#slt-usuario');
let usuario = [];

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

    usuario.forEach(obj_usuario_registrado => {
        if (obj_usuario_registrado.nombre === input_nombre.value) {
            error = true;
            return;
        } else {
            error = false;
        }
    });

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'text': 'Por favor revise los campos resaltados o el usuario ya está registrado'
        });
    } else {
        Swal.fire({
            'icon': 'succes',
             
        }).then(() => {
            limpiar();
            location.reload();
        });
        obtener_datos_usuarios();
    }
};

const obtener_datos_usuarios = async() => {
    let nombre = input_nombre.value;
    let nacimiento = new Date(input_nacimiento.value);
    let correo = input_correo.value;
    let genero = slt_genero.value;
    let contrasenna = input_contrasenna.value;
    let tipo_usuario = slt_usuario.value;

    let obj_usuario = new Usuario(nombre, nacimiento, correo, genero, contrasenna, tipo_usuario);

    await registrar_usuario(obj_usuario);
};

btn_registrar.addEventListener('click', validar);