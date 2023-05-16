const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama tag harus diisi'],
        minlength: [3, 'Panjang nama tag minimal 3 karakter'],
        maxlength: [20, 'Panjang nama tag minimal 20 karakter '],
        
    },
});

module.exports = mongoose.model('Tag', tagSchema);