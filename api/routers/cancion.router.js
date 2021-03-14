'use strict';
const express = require('express');
const Cancion = require('../models/cancion.model');
const router = new express.Router();

router.post('/registrar-cancion', (req, res) => {

    let cancion = JSON.parse(req.body.obj);

    let nueva_cancion = new Cancion({
        'nombre': cancion.nombre,
        'duracion': cancion.duracion,
        'nombre_artista': cancion.nombre_artista,
        'nombre_album': cancion.nombre_album
    });

    // cancion.lista_album.forEach(cancion => {
    //     nuevo_cancion.album.push(cancion._id);
    // });
    nueva_cancion.save((err, cancion) => {
        if (err) {
            res.json({
                'msj': 'No se pudo registrar la cancion',
                err
            });
        } else {
            res.json({
                'msj': 'La cancion se registró correctamente',
                cancion
            });
        }

    });
});


router.get('/listar-cancion', (req, res) => {
    Cancion.find((err, lista) => {
        if (err) {
            res.json({
                'msj': 'No se pudo listar los cancion',
                err
            });
        } else {
            res.json({
                'msj': 'Los cancion se listaron correctamente',
                lista
            });
        }
    });
});

router.get('/listar-cancion' , (req, res) =>{
    Cancion.find().populate('album').exec((err,lista) =>{
        if (err) {
            res.json({
                msj: 'No se pudo listar el albúm',
                err
            });
        } else {
            res.json({
                msj: 'El albúm se listo correctamente',
                lista
            });
        }
    });
});
router.get('/buscar-cancion', (req, res) => {
    Cancion.findOne({ _id: req.query._id }, (err, cancion) => {
        if (err) {
            res.json({
                msj: 'No se encontró el canción',
                err
            });
        } else {
            res.json({
                cancion
            });
        }
    });
});
router.put('/modificar-cancion', (req, res) => {
    let obj_cancion = JSON.parse(req.body.obj);
    Cancion.updateOne({ _id: obj_cancion._id }, {
        $set: {
            nombre: obj_cancion.nombre,
            duracion:obj_cancion.duracion,
           
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la cancion',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});


// router.put('eliminar-album-cancion', (req, res) => {
    
//     let album_eliminar = JSON.parse(req.body.album);
//     Cancion.findById(req.body._id, (err, cancion) => {
//         if (err) {
//             res.json({
//                 msj: 'La canción no se encontró',
//                 err
//             });
//         } else {
//             album_eliminar.forEach(album => {
//                 cancion.album.pull(album)
//             });
//             cancion.save((err, ) => {
//                 if (err) {
//                     res.json({
//                         msj: 'La album no se pudo registrar',
//                         err
//                     });
//                 } else {
//                     res.json({
//                         msj: 'La album se registró correctamente',
//                         album
//                     });
//                 }
//             });
//         }
//     });
// });
module.exports = router;