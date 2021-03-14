'use strict';

const gestor = new Gestor();
const tabla = document.querySelector('#tbl-cancion tbody');
const btn_crear = document.querySelector('#btn-registrar');
const input_codigo = document.querySelector('#txt-codigo');
const input_nombre = document.querySelector('#txt-nombre');
const input_lanzamiento = document.querySelector('#txt-lanzamiento');

const mostrar_cancion = async() => {
    let lista_cancion = await gestor.obtener_cancion();

    lista_cancion.forEach(cancion => {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = cancion.get_nombre();
        fila.insertCell().innerHTML = cancion.get_duracion();
        fila.insertCell().innerHTML = cancion.get_nombre_artista();
        fila.insertCell().innerHTML = cancion.get_nombre_album();

        let celda = fila.insertCell();

        let check = document.createElement('input');
        check.type = 'checkbox';
        check.value = JSON.stringify(cancion);

        celda.appendChild(check);
    });
};
const obtener_datos_album = () => {
    let album = new Album(input_codigo.value,input_nombre.value, input_lanzamiento.value);

    let cancion_seleccionados = document.querySelectorAll('input[type=checkbox]:checked');

    cancion_seleccionados.forEach(input => {
        let cancion = JSON.parse(input.value);
        let obj_cancion = new Cancion(cancion.nombre, cancion.duracion,cancion.nombre_artista,cancion.nombre_album);

        obj_cancion.set_id(cancion._id);
 
        album.agregar_cancion(obj_cancion);
    });

    // let artista = JSON.parse(localStorage.getItem('artista_seleccionado'));

    // let obj_artista = new Artista(artista.nombre, artista.casa_disquera, artista.nacimiento );

    // obj_artista.agregar_album(album);

    // gestor.registrar_artista(album);
    console.log(album);
    gestor.registrar_album(album);
    
}

mostrar_cancion(); 
btn_crear.addEventListener('click', obtener_datos_album);