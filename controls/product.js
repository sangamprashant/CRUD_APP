const Product = require("../model/product");

const create = async (req, res) => {
  try {
    const { p_title, p_price, p_description, p_images } = req.body;
    const newProduct = new Product({
      p_title,
      p_price,
      p_description,
      p_images,
    });
    await newProduct.save();
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
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }
    res.status(200).json({ product, success: true });
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { p_title, p_price, p_description, p_images } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        p_title,
        p_price,
        p_description,
        p_images,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product updated successfully", success: true });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  create,
  getAllProduct,
  deleteProduct,
  getProductById,
  updateProduct,
};
