const Product = require("../model/product");

const create = async (req, res) => {
  try {
    // Extracting product details from request body
    const { p_title, p_price, p_description, p_images } = req.body;

    // Creating a new product instance
    const newProduct = new Product({
      p_title,
      p_price,
      p_description,
      p_images,
    });

    // Saving the new product to the database
    await newProduct.save();

    // Sending success response
    res
      .status(201)
      .json({ message: "Product created successfully", success: true });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const getAllProduct = async (req, res) => {
  try {
    console.log("hello")
    const products = await Product.find({});
    res.status(200).json({ products, success: true });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { create, getAllProduct,deleteProduct };
