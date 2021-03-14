'use strict';
const tabla = document.querySelector('#tbl-cancion tbody');
const input_filtro = document.querySelector('#txt-filtro');
const gestor = new Gestor();

const imprimir_tabla = async() => {
    let cancion = await gestor.obtener_cancion();

    tabla.innerHTML = '';

    let filtro = input_filtro.value.toLowerCase();
    cancion
    .filter(cancion => cancion.nombre.toLowerCase().includes(filtro))
    .forEach(cancion => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = cancion.get_nombre();
        fila.insertCell().innerHTML = cancion.get_duracion();
       

        let celda_modificar = fila.insertCell();
        let boton = document.createElement('button');
        boton.classList.add('btn', 'btn-success');
        boton.innerText = 'Modificar';

        celda_modificar.appendChild(boton);

        boton.addEventListener('click', () => {
            localStorage.setItem('cancion_seleccionado', JSON.stringify(cancion));

            window.location.href = 'modificar-cancion.html';
        });

    });
};

imprimir_tabla();
input_filtro.addEventListener('keyup', () => {
    imprimir_tabla();
});