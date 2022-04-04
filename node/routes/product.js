const express = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  searchProducts,
  filterProducts,
  maxPrice,
  minPrice,
} = require("../controllers/product");
const router = express.Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);
router.get("/products/:title", searchProducts);
router.get("/products/:min/:max", filterProducts);

router.get("/product", maxPrice);
router.get("/productmin", minPrice);

module.exports = router;
