'use strict';

class Gestor {
    constructor() {
    }

    async obtener_usuarios() {
        let lista = await obtener_datos_usuarios('listar-usuarios');
        let lista_usuarios = lista.map((usuario) => {
            let obj_usuario = new Usuario(usuario.nombre, usuario.correo, usuario.tipo_usuario);
    
            return obj_usuario;
        })
    
        return lista_usuarios;
    }

    registrar_usuario(usuario) {
        registrar_datos(usuario, 'registrar-usuario');
    }

    async iniciar_sesion(correo, contrasenna) {
        validar_credenciales(correo, contrasenna);
    }

    async obtener_artista() {
        let lista = await obtener_datos('listar-artista');
        let lista_artista = lista.map((artista) => {
            let obj_artista = new Artista(artista.nombre, artista.casa_disquera, artista.nacimiento);
            obj_artista.set_id(artista._id);
            return obj_artista;
        })
    
        return lista_artista;
    }


    async obtener_cancion() {
        let lista = await obtener_datos('listar-cancion');
        let lista_cancion = lista.map((cancion) => {
            let obj_cancion = new Cancion(cancion.nombre, cancion.duracion,cancion.nombre_artista,cancion.nombre_album);
            obj_cancion.set_id(cancion._id);
            

            return obj_cancion;
        })

        return lista_cancion;
    }

    async obtener_album_lista() {
        let lista = await obtener_datos('listar-album');
        let lista_album = lista.map((album) => {
            let obj_album = new Album(album.codigo, album.nombre_album, album.fecha_lanzamiento);
            obj_album.set_id(album._id);
            

            return obj_album;
        })

        return lista_album;
    }

    
    async obtener_album() {
        let lista  = await obtener_datos('listar-album');
        let lista_album = lista.map(album => {
            let obj_album = new Album(album.codigo, album.nombre_album, album.fecha_lanzamiento);
            obj_album.set_id(album._id);

            album.cancion.forEach(cancion => {
                let obj_cancion = new Cancion(cancion.nombre, cancion.duracion,cancion.nombre_artista,cancion.nombre_album);
                obj_cancion.set_id(cancion._id);
                

                obj_album.agregar_cancion(obj_cancion);
            });

            return obj_album;
        });

        return lista_album;
    }
    registrar_cancion(cancion) {
        registrar_datos(cancion, 'registrar-cancion');
    }
    modificar_cancion(cancion) {
        modificar_datos(cancion, 'modificar-cancion');
    }

    modificar_artista(artista) {
        modificar_datos_artista(artista, 'modificar-artista');
    }
    modificar_album(album) {
        modificar_datos_album(album, 'modificar-album');
    }
    
    registrar_album(album) {
        registrar_datos(album, 'registrar-album');
    }
    
    registrar_artista(artista) {
        registrar_datos(artista, 'registrar-artista');
    }

    async iniciar_sesion(correo, contrasenna) {
        validar_credenciales(correo, contrasenna);
    }
}