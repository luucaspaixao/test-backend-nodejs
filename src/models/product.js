const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    require: true
  },
  category: [
    {
      type: String,
    }
  ]
})

const Products = mongoose.model('Products', ProductSchema)

module.exports = Products;