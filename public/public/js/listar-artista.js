'use strict';

const tabla = document.querySelector('#tbl-artista tbody');
const input_filtro = document.querySelector('#txt-filtro');
const gestor = new Gestor();

const imprimir_tabla = async() => {
    let artista = await gestor.obtener_artista();

    tabla.innerHTML = '';
    let filtro = input_filtro.value.toLowerCase();
   

    artista
    .filter(artista => artista.nombre.toLowerCase().includes(filtro))
    .forEach(artista => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = artista.get_nombre();
        fila.insertCell().innerHTML = artista.get_casa_disquera();
        fila.insertCell().innerHTML = artista.get_nacimiento();
        fila.insertCell().innerHTML = artista.calc_edad();

        let celda_modificar = fila.insertCell();
        let boton = document.createElement('button');
        boton.classList.add('btn', 'btn-success');
        boton.innerText = 'Modificar';

        celda_modificar.appendChild(boton);

        boton.addEventListener('click', () => {
            localStorage.setItem('artista_seleccionado', JSON.stringify(artista));

            window.location.href = 'modificar-artista.html';
        });
    });
};

imprimir_tabla();
input_filtro.addEventListener('keyup', () => {
    imprimir_tabla();
});