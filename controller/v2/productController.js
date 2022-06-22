const Product = require("../../models/Product");

const getProduct = (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const getProductDetail = (req, res) => {
  const id = req.params.id;
  Product.findOne({ _id: id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const addProduct = (req, res) => {
  const { merek, harga, stok, status } = req.body;
  Product.create({ merek, harga, stok, status })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const { merek, harga, stok, status } = req.body;
  Product.updateOne(
    { _id: id },
    { $set: { merek, harga, stok, status } },
    { upsert: true }
  )
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.deleteOne({ _id: id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports = {
  getProduct,
  getProductDetail,
  addProduct,
  deleteProduct,
  updateProduct,
};
