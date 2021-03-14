const boton = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_casa = document.querySelector('#txt-casa');
const input_nacimiento = document.querySelector('#txt-nacimiento');
const gestor = new Gestor();

let artista_seleccionado;
if (localStorage.getItem('artista_seleccionado')) {
    artista_seleccionado = JSON.parse(localStorage.getItem('artista_seleccionado'));
}

const llenar_formulario = () => {
    input_nombre.value = artista_seleccionado.nombre;
    input_casa.value = artista_seleccionado.casa_disquera;
    input_nacimiento.value = artista_seleccionado.nacimiento;
    
};

const obtener_info_artista = () => {
    let artista = new Artista(input_nombre.value, input_casa.value,input_nacimiento.value);
    artista.set_id(artista_seleccionado._id);
    gestor.modificar_artista(artista);
}

llenar_formulario();
boton.addEventListener('click', obtener_info_artista);