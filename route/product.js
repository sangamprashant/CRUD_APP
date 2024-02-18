const express = require("express");
const { create, getAllProduct, deleteProduct } = require("../controls/product");

const router = express.Router();

//create || POST
router.post("/create", create);
// display || GET
router.get("/get-product", getAllProduct);

// DELETE route to delete a product by ID
router.delete('/products/:id', deleteProduct);


module.exports = router;
