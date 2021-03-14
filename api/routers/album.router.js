'use strict';

const express = require('express');
const router = express.Router();
const Album = require('../models/album.model');

router.post('/registrar-album', (req, res) => {
    let album = JSON.parse(req.body.obj);

    let nuevo_album = new Album({
        'codigo': album.codigo,
        'nombre_album': album.nombre_album,
        'fecha_lanzamiento': album.fecha_lanzamiento
    });

    album.lista_cancion.forEach(cancion => {
        nuevo_album.cancion.push(cancion._id);
    });
    
    nuevo_album.save((err, album) => {
        if (err) {
            res.json({
                'msj': 'No se pudo registrar el albúm',
                err
            });
        } else {
            res.json({
                'msj': 'El albúm se registró correctamente',
                album
            });
        }

    });
});

// router.get('/listar-album', (req, res) => {
//     Album.find((err, lista) => {
//         if (err) {
//             res.json({
//                 'msj': 'No se pudo listar el album',
//                 err
//             });
//         } else {
//             res.json({
//                 'msj': 'El album se listaron correctamente',
//                 lista
//             });
//         }
//     });
// });

router.get('/listar-album' , (req, res) =>{
    Album.find().populate('cancion').exec((err,lista) =>{
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

router.get('/buscar-album', (req, res) => {
    Album.findOne({ _id: req.query._id }, (err, album) => {
        if (err) {
            res.json({
                msj: 'No se encontró el album',
                err
            });
        } else {
            res.json({
                album
            });
        }
    });
});
router.put('/modificar-album', (req, res) => {
    let obj_album = JSON.parse(req.body.obj);
    Album.updateOne({ _id: obj_album._id }, {
        $set: {
            nombre_album: obj_album.nombre_album,
            fecha_lanzamiento: obj_album.fecha_lanzamiento
            
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la album',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});

// router.put('eliminar-cancion-album', (req, res) => {
    
//     let cancion_eliminar = JSON.parse(req.body.cancion);
//     Album.findById(req.body._id, (err, album) => {
//         if (err) {
//             res.json({
//                 msj: 'La album no se encontró',
//                 err
//             });
//         } else {
//             cancion_eliminar.forEach(cancion => {
//                 album.cancion.pull(cancion)
//             });
//             album.save((err, album) => {
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