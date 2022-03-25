const express = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");
const router = express.Router();

router.get("/products", getProducts);
router.post("/add", createProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);

module.exports = router;
