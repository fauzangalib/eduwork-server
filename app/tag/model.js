const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let tagSchema = Schema({

    name: {
        type: String,
        minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
        maxlength: [20, 'Panjang nama kategori maksimal 20 karakter'],
        required: [true, 'nama makanan harus diisi']
    }
});

module.exports = model('Tag', tagSchema);