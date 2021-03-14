'use strict';

const tabla = document.querySelector('#tbl-albumes tbody');
const gestor = new Gestor();

const imprimir_tabla = async() => {
    let album = await gestor.obtener_album();

    tabla.innerHTML = '';

    album.forEach(album => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = album.get_codigo();
        fila.insertCell().innerHTML = album.get_nombre_album();
        fila.insertCell().innerHTML = album.get_lanzamiento();
        console.log(album);
        let celda_cancion = fila.insertCell();
        let ul_cancion = document.createElement('ul');

        album.get_lista_cancion().forEach(cancion => {
            let li_cancion = document.createElement('li');
            li_cancion.innerText = cancion.get_nombre() + ' : ' + cancion.get_duracion() + ' : ' + cancion.get_nombre_artista() + ' : ' + cancion.get_nombre_album();
            ul_cancion.appendChild(li_cancion);
        });

        celda_cancion.appendChild(ul_cancion);

        let celda_modificar = fila.insertCell();
        let boton = document.createElement('button');
        boton.classList.add('btn', 'btn-success');
        boton.innerText = 'Modificar';

        celda_modificar.appendChild(boton);

    });
};

imprimir_tabla();