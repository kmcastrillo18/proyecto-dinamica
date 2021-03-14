'use strict';

const input_correo_usuario = document.querySelector('#txt-correo');
const input_contrasenna_usuario = document.querySelector('#txt-contrasenna');
const btn_ingresar = document.querySelector('#btn-iniciar');
const gestor = new Gestor();
const obtener_info_inicio = () => {
    gestor.iniciar_sesion(input_correo_usuario.value, input_contrasenna_usuario.value);
};

btn_ingresar.addEventListener('click', obtener_info_inicio);