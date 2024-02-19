const express = require("express");
const { create, getAllProduct, deleteProduct, getProductById, updateProduct } = require("../controls/product");
const middleware = require("../middleware")

const router = express.Router();

//create || POST
router.post("/create",middleware, create);
// display || GET
router.get("/get-product",middleware, getAllProduct);
// DELETE route to delete a product by ID || GET
router.delete('/products/:id',middleware, deleteProduct);
//set single product data || GET
router.get("/product/:id",middleware,getProductById)
// Update a product
router.put("/update/:id",middleware,updateProduct)


module.exports = router;
