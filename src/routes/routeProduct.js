const express = require("express");
const router = express.Router();
const productController = require("../controllers/productList");

router.get("/search", productController.searchItemsProduct);
router.post("/", productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);

module.exports = router;
