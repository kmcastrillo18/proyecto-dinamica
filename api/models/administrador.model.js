'use strict';

const mongoose = require('mongoose');

const schema_administrador = mongoose.Schema({
    nombre_admin:{type: String, required : true, unique: true}, //Si require está en false, quiere decir que el campo es opcional //Unique en true: No pueden haber dos objetos con el mismo nombre
    nacimiento: {type: Date, required: true},
    correo_admin: {type: String, required: true, unique: true},
    usuario: {type: String, required: true, unique: true},
    contrasenna_admin: {type: String, required: true, unique: true}    
});

module.exports = mongoose.model('Administrador', schema_administrador, 'administrador');