import React from "react";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";

const ProductDetail = ({ onAddToCart }) => {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        {/* Left Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 container">
          <ProductImage />

          {/* Right Section */}
          <ProductInfo onAddToCart={onAddToCart} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
