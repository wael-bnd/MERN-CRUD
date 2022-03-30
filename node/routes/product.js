const express = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  filterProducts,
} = require("../controllers/product");
const router = express.Router();

router.get("/products", getProducts);
router.post("/add", createProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);
router.get("/productsfilter", filterProducts);

module.exports = router;
