const router = require("express").Router();
const {
  getProduct,
  getProductDetail,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/v2/productController");

router.get("/product", getProduct);
router.get("/product/:id", getProductDetail);
router.put("/product/:id", updateProduct);
router.post("/product", addProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
