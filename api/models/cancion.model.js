'use strict';

const mongoose = require('mongoose');

const schema_cancion = mongoose.Schema({
 //Si require está en false, quiere decir que el campo es opcional //Unique en true: No pueden haber dos objetos con el mismo nombre
    nombre: {type: String, required: true, unique: false},
    duracion:{type: Number, required : true, unique: false},
    nombre_artista: {type: String, required: true, unique: false},
    nombre_album: {type: String, required: true, unique: false},
    album: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }]
    
});

module.exports = mongoose.model('Cancion', schema_cancion, 'cancion');