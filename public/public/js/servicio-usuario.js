'use strict';

const registrar_usuario = async(obj_usuario) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-usuario',
        responseType: 'json',
        data: {
            'usuario': obj_usuario
        }
    }).then((response) => {
        Swal.fire({
            'title': response.data.msj
        });
    }).catch((err) => {
        Swal.fire({
            'icon': 'error',
            'text': `El usuario no se pudo registrar, ocurrió el siguiente error: ${err}`
        });
    });
};

const validar_credenciales = async(correo, contrasenna) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/inicio-sesion',
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
                        nombre: response.data.nombre,
                        nacimiento: response.data.nacimiento,
                        correo: response.data.correo,
                        genero: response.data.genero,
                        tipo_usuario: response.data.tipo_usuario
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