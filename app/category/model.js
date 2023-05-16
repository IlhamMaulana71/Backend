const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama kategori harus diisi'],
        minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
        maxlength: [20, 'Panjang nama kategori minimal 20 karakter '],
        
    },
});

module.exports = mongoose.model('Category', categorySchema);