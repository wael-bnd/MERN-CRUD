const express = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  searchProducts,
} = require("../controllers/product");
const router = express.Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);
router.get("/products/:title", searchProducts);

module.exports = router;
