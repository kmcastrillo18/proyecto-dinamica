'use strict';
// Se exporta la dependecia de mongoose
const mongoose = require('mongoose');

const schema_cuerpo = new mongoose.Schema({
    'nombre': { type: String, required: true, unique: true },
    'casa_disquera': { type: String, required: true, unique: false },
    'nacimiento': { type: Date, required: false, unique: false },
    
    
});

module.exports = mongoose.model('Artista', schema_cuerpo, 'artista');
