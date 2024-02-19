import { Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { BASE_API } from "../../../../env";
import { AuthContext } from "../../../../AppProvider";

const config = {
  title: "Error!",
  content: (
    <>
      <p>All fields are required</p>
    </>
  ),
};

function AddProducts({ productId }) {
  const { token } = React.useContext(AuthContext);
  const [formData, setFormData] = React.useState({
    p_title: "",
    p_price: "",
    p_description: "",
    p_images: "",
  });
  const [selectedImage, setSelectedFile] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${BASE_API}/api/product/product/${productId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        const product = response.data.product;
        setFormData({
          p_title: product.p_title,
          p_price: product.p_price,
          p_description: product.p_description,
          p_images: product.p_images,
        });
        setImagePreview(product.p_images);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "p_images" ? files[0] : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      isNaN(formData.p_price) ||
      !formData.p_description.trim() ||
      !formData.p_title.trim() ||
      !(selectedImage || formData.p_images)
    ) {
      return Modal.error(config);
    }
    setLoading(true);
    try {
      if (selectedImage) {
        const fileRef = ref(storage, `crud/${Date.now() + selectedImage.name}`);
        const snapshot = await uploadBytes(fileRef, selectedImage);
        const url = await getDownloadURL(snapshot.ref);
        handleSave(url);
      } else {
        handleSave(formData.p_images);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error("Failed to upload image");
      setLoading(false);
    }
  };

  const handleSave = async (path) => {
    try {
      const reqbody = {
        ...formData,
        p_images: path,
      };

      let response;

      if (productId) {
        response = await axios.put(
          `${BASE_API}/api/product/update/${productId}`,
          reqbody,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      } else {
        response = await axios.post(`${BASE_API}/api/product/create`, reqbody, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
      }

      if (response.data.success) {
        message.success(
          productId
            ? "Product updated successfully"
            : "Product added successfully"
        );
        setFormData({
          p_title: "",
          p_price: "",
          p_description: "",
          p_images: "",
        });
        setImagePreview(null);
      }
    } catch (error) {
      console.error("Error saving product:", error);
      message.error(error.response?.data?.message || "Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <h3>{productId ? "Edit product" : "Add a product"}</h3>
        <div className="row">
          <div className="col-md-6">
            <label>Product title</label>
            <input
              type="text"
              name="p_title"
              placeholder="Product title"
              className="form-control"
              value={formData.p_title}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Product Price</label>
            <input
              type="number"
              name="p_price"
              placeholder="Product price"
              className="form-control"
              value={formData.p_price}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12">
            <label>Product description</label>
            <textarea
              type="number"
              name="p_description"
              placeholder="Product description"
              className="form-control"
              value={formData.p_description}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Product Images</label>
            <input
              className="form-control"
              type="file"
              onChange={handleImageChange}
            />
          </div>
          <div className="col-md-6">
            <label>Preview of images</label>
            <br />
            {imagePreview && (
              <img
                src={imagePreview}
                height={200}
                width={200}
                className=" object-fit-contain"
              />
            )}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" disabled={loading}>
            {loading
              ? "Please wait.."
              : productId
              ? "Update product"
              : "Add product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
