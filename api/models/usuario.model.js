'use strict';

const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({
    nombre:{type: String, required : true, unique: true}, //Si require está en false, quiere decir que el campo es opcional //Unique en true: No pueden haber dos objetos con el mismo nombre
    nacimiento: {type: Date, required: true},
    correo: {type: String, required: true, unique: true},
    genero: {type: String, required: true},
    contrasenna: {type: String, required: true},
    tipo_usuario: {type: String, required: true}   
});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuario');