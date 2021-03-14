'use strict';
const boton = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_casa = document.querySelector('#txt-casa');
const input_nacimiento = document.querySelector('#txt-nacimiento');



const validar = () => {

    let err = false;

    let fecha_nacimiento = new Date(input_nacimiento.value);

    let hoy = new Date();
    let edad = hoy.getFullYear() - fecha_nacimiento.getFullYear();
    let mes = hoy.getMonth() - fecha_nacimiento.getMonth();

    //Validar fecha de nacimiento
     if (mes < 0 || (mes === 0 && hoy.getDate() < fecha_nacimiento.getDate())) {
        edad = edad - 1;
    }

    console.log(edad);

    if (input_nombre.value === '' || input_casa.value === '' || input_nacimiento.value === '') {
        Swal.fire({
            'icon': 'warning',
            'title': 'Campo vacío.',
            'text': 'Por favor rellene todos los campos.'
        });
        return;
    }

    colecc_artista.forEach(obj_artista => {
        if (obj_artista.nombre === input_nombre.value) {
            err = true;
            return;
        } else {
            err = false;
        }
    });

    if (err) {
        // Swal.fire({
        //     'icon': 'warning',
        //     'title': 'El artista ya existe.',
        //     'text': 'Por favor registre uno nuevo.'
        // });
    } else {
        obtener_datos_album();
        Swal.fire({
            // 'icon': 'success',
            // 'title': 'El artista se registro con exito.',
            // 'text': 'ok.'
            
        }).then(() => {
            limpiar();
            location.reload();
        });
    }
}



const gestor = new Gestor();

const obtener_datos_artista = () => {
    let artista = new Artista(input_nombre.value, input_casa.value, input_nacimiento.value);
    gestor.registrar_artista(artista);
}

boton.addEventListener('click', obtener_datos_artista);
const limpiar = () => {
    input_nombre.value = '';
    input_casa.value = '';
    input_nacimiento.value = '';
    boton.value = '';
};


// eventListeners();