const express = require("express");

//import controaldor
const {
  addProduct,
  getProduct,
  getProducts,
  editProduct,
  deleteProduct
} = require("../controllers/productController.js");

const productsRouter = express.Router();

productsRouter.get("/", getProducts);

productsRouter.post("/", addProduct);

productsRouter.get("/:id", getProduct);

productsRouter.put("/:id/edit", editProduct);

productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;