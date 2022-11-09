
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Product = new Schema({   
    name: { type: String, default: 'hahaha' },
    price: { type: Number, min: 1, index: true },
    discount: { type: Number, min: 0, max: 99},
    type: { type: String, default: 'shirt' },
    quantity: { type: Number, min: 0},
    description: { type: String, default: 'description' },
    image: { type: String, default: 'assets/images/ao1.webp'},
    createAt: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Product', Product)