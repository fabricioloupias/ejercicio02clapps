const moongose = require('mongoose');
const { Schema } = moongose;

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type:Number, required: true}
})

module.exports = moongose.model('Products', productSchema)