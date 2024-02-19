import axios from "axios";
import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../../../AppProvider";
import { BASE_API } from "../../../../env";
import { Button, Popconfirm, Table, message } from "antd";
import { Link } from "react-router-dom";

function AllProducts() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    if (token) {
      fetchProducts();
    }
  }, [token]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_API}/api/product/get-product`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "p_images",
      key: "p_images",
      render: (image) => (
        <img
          src={image}
          height={100}
          width={100}
          className="object-fit-contain"
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "p_title",
      key: "p_title",
    },
    {
      title: "Description",
      dataIndex: "p_description",
      key: "p_description",
    },
    {
      title: "Price",
      dataIndex: "p_price",
      key: "p_price",
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <div className="d-flex gap-2 align-items-center">
          <Popconfirm
            title="Delete this product?"
            onConfirm={() => handleDelete(_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Link to={`/product/${_id}`} className="btn btn-success">
            View
          </Link>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_API}/api/product/products/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      message.success("Product deleted successfully");
      fetchProducts(); // Refresh products after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
      message.error("Failed to delete product");
    }
  };

  return (
    <>
      <h1>All Products</h1>
      <Table dataSource={products} columns={columns} />
    </>
  );
}

export default AllProducts;
