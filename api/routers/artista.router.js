'use strict';
const express = require('express');
const Artista = require('../models/artista.model');
const router = new express.Router();

router.post('/registrar-artista', (req, res) => {

    let artista = JSON.parse(req.body.obj);

    let nuevo_artista = new Artista({
        'nombre': artista.nombre,
        'casa_disquera': artista.casa_disquera,
        'nacimiento': artista.nacimiento
        
    });
    nuevo_artista.save((err, artista) => {
        if (err) {
            res.json({
                'msj': 'No se pudo registrar el artista',
                err
            });
        } else {
            res.json({
                'msj': 'El artista se registró correctamente',
                artista
            });
        }

    });
});

router.get('/listar-artista', (req, res) => {
    Artista.find((err, lista) => {
        if (err) {
            res.json({
                'msj': 'No se pudo listar los artistas',
                err
            });
        } else {
            res.json({
                'msj': 'Los artistas se listaron correctamente',
                lista
            });
        }
    });
});

router.get('/buscar-artista', (req, res) => {
    Artista.findOne({ _id: req.query._id }, (err, artista) => {
        if (err) {
            res.json({
                msj: 'No se encontró el canción',
                err
            });
        } else {
            res.json({
                artista
            });
        }
    });
});
router.put('/modificar-artista', (req, res) => {
    let obj_artista = JSON.parse(req.body.obj);
    Artista.updateOne({ _id: obj_artista._id }, {
        $set: {
            nombre: obj_artista.nombre,
            casa_disquera: obj_artista.casa_disquera,
            nacimiento: obj_artista.nacimiento,
           
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la artista',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});

// router.get('/buscar-artistas-id', (req, res) => {
//     Artista.findOne({ _id: req.query._id }, (err, cuerpo) => {
//         if (err) {
//             res.json({
//                 'msj': 'Ocurrió un error al buscar el artista',
//                 err
//             });
//         } else {
//             if (cuerpo) {
//                 res.json({
//                     'msj': 'El artista se encontró correctamente',
//                     artista
//                 });
//             } else {
//                 res.json({
//                     'msj': 'No se encontró el artista'
//                 });
//             }

//         }
//     });
// });
module.exports = router;