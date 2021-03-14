'use strict';

const mongoose = require('mongoose');

const schema_album = mongoose.Schema({
    codigo:{type: String, required : true, unique: true}, //Si require está en false, quiere decir que el campo es opcional //Unique en true: No pueden haber dos objetos con el mismo nombre
    nombre_album: {type: String, required: true, unique: false},
    fecha_lanzamiento: {type: Date, required: true, unique: false},
    cancion: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cancion'
    }]
});

module.exports = mongoose.model('Album', schema_album, 'album');