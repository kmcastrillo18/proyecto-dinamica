'use strict';

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');

router.post('/registrar-usuario', (req, res) => {
    let usuario = req.body.usuario;
    console.log(usuario);
    console.log(req.body.usuario);
    let usuario_nuevo = new Usuario({
        'nombre': usuario.nombre,
        'nacimiento': usuario.nacimiento,
        'correo': usuario.correo,
        'genero': usuario.genero,
        'contrasenna': usuario.contrasenna,
        'tipo_usuario': usuario.tipo_usuario
    });
    usuario_nuevo.save((err, usuario_bd) => {
        if (err) {
            res.json({
                'msj': 'No se pudo registrar el usuario, ocurrió un error o el usuario ya existe',
                err
            });
        } else {
            res.json({
                'msj': 'El usuario se registró correctamente',
                usuario_bd
            });
        }

    });
});

router.post('/iniciar-sesion', (req, res) => {
    let correo = req.body.correo;
    let contrasenna = req.body.contrasenna;

    Usuario.findOne({ correo: correo }, (err, usuario) => {
        if (err) {
            res.json({
                msj: 'El correo electrónico o la contraseña no son correctos',
                inicio: false,
                err
            });
        } else {
            if (usuario && usuario.contrasenna == contrasenna) {
                res.json({
                    nombre: usuario.nombre,
                    nacimiento: usuario.nacimiento,
                    correo: usuario.correo,
                    genero: usuario.genero,
                    tipo_usuario: usuario.tipo_usuario,
                    inicio: true
                });
            } else {
                res.json({
                    msj: 'El correo electrónico o la contraseña no son correctos',
                    inicio: false,
                    err
                });
            }


        }
    });
});



module.exports = router;