const boton = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_lanzamiento = document.querySelector('#txt-lanzamiento');
const gestor = new Gestor();

let album_seleccionado;
if (localStorage.getItem('album_seleccionado')) {
    album_seleccionado = JSON.parse(localStorage.getItem('album_seleccionado'));
}

const llenar_formulario = () => {
    input_nombre.value = album_seleccionado.nombre_album;
    input_lanzamiento.value = album_seleccionado.fecha_lanzamiento;
    
    
};

const obtener_info_album = () => {
    let album = new Album(input_nombre.value, input_lanzamiento.value);
    album.set_id(album_seleccionado._id);
    gestor.modificar_album(album);
}

llenar_formulario();
boton.addEventListener('click', obtener_info_album);