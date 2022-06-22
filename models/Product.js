const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  merek: {
    type: String,
  },
  stok: {
    type: Number,
  },
  harga: {
    type: Number,
  },
  status: {
    type: String,
  },
});

Product = mongoose.model("laptop", ProductSchema);
module.exports = Product;
