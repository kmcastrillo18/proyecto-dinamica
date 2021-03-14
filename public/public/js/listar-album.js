'use strict';

const tabla = document.querySelector('#tbl-album tbody');
const input_filtro = document.querySelector('#txt-filtro');
const gestor = new Gestor();

const imprimir_tabla = async() => {
    let album = await gestor.obtener_album_lista();

    tabla.innerHTML = '';
    let filtro = input_filtro.value.toLowerCase();

    album
    .filter(album => album.nombre_album.toLowerCase().includes(filtro))
    .forEach(album => {
        let fila = tabla.insertRow();
       
        fila.insertCell().innerHTML = album.get_nombre_album();
        fila.insertCell().innerHTML = album.get_lanzamiento();

        let celda_modificar = fila.insertCell();
        let boton = document.createElement('button');
        boton.classList.add('btn', 'btn-success');
        boton.innerText = 'Modificar';

        celda_modificar.appendChild(boton);

        boton.addEventListener('click', () => {
            localStorage.setItem('album_seleccionado', JSON.stringify(album));

            window.location.href = 'modificar-album.html';
        });
    });
};

imprimir_tabla();
input_filtro.addEventListener('keyup', () => {
    imprimir_tabla();
});