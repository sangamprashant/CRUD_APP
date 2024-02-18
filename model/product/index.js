// product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  p_title: {
    type: String,
    required: true
  },
  p_price: {
    type: Number,
    required: true
  },
  p_description: {
    type: String,
    required: true
  },
  p_images: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
