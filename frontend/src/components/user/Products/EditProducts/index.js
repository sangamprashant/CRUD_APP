import React from "react";
import { useParams } from "react-router-dom";
import AddProducts from "../AddProducts";

function EditProduct() {
  const { id } = useParams();
  return <AddProducts productId={id} />;
}

export default EditProduct;
