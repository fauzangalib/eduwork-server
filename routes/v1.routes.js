const router = require("express").Router();
const {
  getProduct,
  getProductDetail,
  addProduct,
  deleteProduct,
  updateProduct
} = require("../controller/v1/productController");

router.get("/product", getProduct);
router.get("/product/:id", getProductDetail);
router.post("/product", addProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
