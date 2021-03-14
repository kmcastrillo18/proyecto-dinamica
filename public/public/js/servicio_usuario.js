'use strict';

const obtener_usuario = async() => {
    let lista_usuario = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-usuario',
        responseType: 'json'
    }).then((response) => {
        lista_usuario = response.data.coleccion_usuario.map(obj_usuario => {
            return new usuarios(obj_usuario.nombre, obj_usuario.correo,obj_usuario.contrasenna, obj_usuario.nacimiento,obj_usuario.genero,obj_usuario.tipo_usuario,);
        });
    }).catch((error) => {
        console.log(error);
    });

    return lista_usuario;
};

const buscar_usuario_id = async(_id) => {
    let obj_usuario = {};

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/buscar-usuario-id',
        params: { _id: _id },
        responseType: 'json'
    }).then((response) => {
        obj_usuario = response.data.usuario;
    }).catch((error) => {
        console.log(error);
    });

    return obj_usuario;
};

const registrar_usuario = async(obj_usuario) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-usuario',
        responseType: 'json',
        data: {
            'usuario': JSON.stringify(obj_usuario)
        }
    }).then((response) => {
        Swal.fire({
            
            'title': response.data.msj,
            
        }).then(() => {
            limpiar();
            location.reload();
        });
    }).catch((err) => {
        Swal.fire({
            'icon': 'error',
            'text': `El usuario no se pudo registrar , ocurrió el siguiente error: ${err}`
        });
    });
};