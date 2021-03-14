'use strict';

const express = require('express');
const router = express.Router();
const Administrador = require('../models/administrador.model');

router.post('/registrar-administrador', (req, res) => {
    let administrador = req.body.administrador;

    let administrador_nuevo = new Administrador({
        'nombre_admin': administrador.nombre_admin,
        'nacimiento': administrador.nacimiento,
        'correo_admin': administrador.correo_admin,
        'usuario': administrador.usuario,
        'contrasenna_admin': administrador.contrasenna_admin
    });
    administrador_nuevo.save((err, admin_bd) => {
        if (err) {
            res.json({
                'msj': 'No se pudo registrar el administrador',
                err
            });
        } else {
            res.json({
                'msj': 'El administrador se registró correctamente',
                admin_bd
            });
        }

    });
});

module.exports = router;