'use strict';
const servidor = 'http://localhost:3000/api/';

const obtener_datos = async(endpoint) => {
    let lista = [];

    await axios({
            method: 'get',
            url: `${servidor}${endpoint}`,
            responseType: 'json'
        })
        .then((response) => {
            lista = response.data.lista;
        })
        .catch((response) => {
            console.log(response.data.msj);
            console.log(response.data.err);
        });

    return lista;

};
const registrar_datos = async(obj, endpoint) => {
    await axios({
            method: 'post',
            url: `${servidor}${endpoint}`,
            responseType: 'json',
            data: {
                obj: JSON.stringify(obj)
            }
        })
        .then((response) => {
            console.log(response.data.msj);
        })
        .catch((err) => {

            console.log(err)
        });
};
const modificar_datos = async(obj, endpoint) => {
    await axios({
        method: 'put',
        url: `${servidor}${endpoint}`,
        responseType: 'json',
        data: {
            obj: JSON.stringify(obj)
        }
    })
    .then((response) => {
        window.location.href = 'listar-cancion.html';
    })
    .catch((err) => {

        console.log(response.data.msj);
        console.log(response.data.msj);
    });
};
const modificar_datos_artista = async(obj, endpoint) => {
    await axios({
        method: 'put',
        url: `${servidor}${endpoint}`,
        responseType: 'json',
        data: {
            obj: JSON.stringify(obj)
        }
    })
    .then((response) => {
        window.location.href = 'listar_artistas.html';
    })
    .catch((err) => {

        console.log(response.data.msj);
        console.log(response.data.msj);
    });
};
const modificar_datos_album = async(obj, endpoint) => {
    await axios({
        method: 'put',
        url: `${servidor}${endpoint}`,
        responseType: 'json',
        data: {
            obj: JSON.stringify(obj)
        }
    })
    .then((response) => {
        window.location.href = 'listar-album.html';
    })
    .catch((err) => {

        console.log(response.data.msj);
        console.log(response.data.msj);
    });
};

const validar_credenciales = async(correo, contrasenna) => {
    await axios({
            method: 'post',
            url: `${servidor}iniciar-sesion`,
            responseType: 'json',
            data: {
                correo: correo,
                contrasenna,
                contrasenna
            }
        })
        .then((response) => {
            if (response.data.inicio == true) {
                Swal.fire({
                    'icon': 'success',
                    'title': 'Bienvenido',
                    'text': 'Ha iniciado sesión correctamente'
                }).then(() => {
                    let usuario = {
                        nombre: response.nombre,
                        nacimiento: response.nacimiento,
                        correo: response.correo,
                        genero: response.genero,
                        tipo_usuario: response.tipo_usuario,
                    };

                    localStorage.setItem('usuario_conectado', JSON.stringify(usuario));
                    window.location.href = 'bienvenida.html';
                });
            } else {
                Swal.fire({
                    'icon': 'error',
                    'title': 'No ha podido iniciar sesión',
                    'text': response.data.msj
                })
            }
        })
        .catch((err) => {

            console.log(err)
        });
};