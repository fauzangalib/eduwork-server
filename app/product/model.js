const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const productSchema = Schema({

    name: {
        type: String,
        minlength: [3, 'Panjang nama makanan minimal 3 karakter'],
        required: [true, 'nama makanan harus diisi']
    },
    description:{
        type: String,
        maclength: [ 1000, 'panjang deskripsi maksimal 1000 karakter']
    },
    price: {
        type: Number,
        default: 0
    },
    image_url: String,
}, {timestamps: true });

module.exports = model('Product', productSchema);