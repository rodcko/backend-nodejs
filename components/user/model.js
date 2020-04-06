// PASO 1 -> Empezar por el modelo, porque así entendemos como va a ser la arquitectura y entidad
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
});

const model = mongoose.model('User', mySchema);
module.exports = model; 
