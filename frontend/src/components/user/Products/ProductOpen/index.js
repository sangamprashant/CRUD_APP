import { Divider, Image, Space, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { BASE_API } from "../../../../env";
import { AuthContext } from "../../../../AppProvider";

function ProductOpen() {
  const { token } = React.useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${BASE_API}/api/product/product/${id}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <>
      {product ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6">
                <Image
                  src={product.p_images}
                  preview={{
                    toolbarRender: (
                      _,
                      {
                        transform: { scale },
                        actions: {
                          onFlipY,
                          onFlipX,
                          onRotateLeft,
                          onRotateRight,
                          onZoomOut,
                          onZoomIn,
                        },
                      }
                    ) => (
                      <Space
                        size={12}
                        className="toolbar-wrapper bg-body-secondary text-black py-2 px-3 rounded-5"
                      >
                        <SwapVertIcon rotate={90} onClick={onFlipY} />
                        <SwapHorizIcon onClick={onFlipX} />
                        <RotateLeftIcon onClick={onRotateLeft} />
                        <RotateRightIcon onClick={onRotateRight} />
                        <ZoomOutIcon
                          disabled={scale === 1}
                          onClick={onZoomOut}
                        />
                        <ZoomInIcon
                          disabled={scale === 50}
                          onClick={onZoomIn}
                        />
                      </Space>
                    ),
                  }}
                />
              </div>
              <div className="col-md-6">
                <h1> {product.p_title}</h1>
                <h5> {product.p_description}</h5>
                <p>Price: {product.p_price}</p>
                <Link
                  className="btn btn-outline-primary"
                  to={`/update/${product._id}`}
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <Spin size="large" />
        </div>
      )}
    </>
  );
}

export default ProductOpen;
