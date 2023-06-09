const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderItemSchema = Schema({
  
  name: {
    type: String,
    minlength: [5, "Panjang nama makanan minimal 50 karakter"],
    required: [true, "Name must be filled"],
  },

  price: {
    type: Number,
    required: [true, "harga item harus diiisi"],
  },

  qty: {
    type: Number,
    required: [true, "Qty harus diisi"],
    min: [1, "Minimal qty adalah 1"],
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },

  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
});

module.exports = model('OrderItem', orderItemSchema);
