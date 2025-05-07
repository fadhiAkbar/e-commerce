import React, { useState } from "react";

const ProductInfo = ({ onAddToCart }) => {
  const [quantity, setquantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart();
  };

  const handleAddQty = () => {
    setquantity(quantity + 1);
  };

  const handleRemoveQty = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="max-w-[420px] flex flex-col justify-center">
        <h1 className="font-inter text-[#757575] font-[700] text-xl">
          CONVERSE
        </h1>
        <h1 className="font-inter font-[700] text-[56px]">Walk Star Trainer</h1>
        <p className="font-inter font-[400] text-[16px] text-[#757575]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex text-[20px] gap-[10px] font-inter mt-5">
          <h1 className="font-[700]">Rp799.000</h1>
          <h1 className="line-through">Rp999.000</h1>
        </div>
        <div className="flex gap-[20px] mt-[75px]">
          <div className="flex gap-[20px]">
            <div
              className="w-[50px] h-[50px] bg-[#F7F8FD] flex justify-center items-center rounded-xl"
              onClick={handleRemoveQty}
            >
              <div className="w-[28px] h-[6px] bg-[#D66406]"></div>
            </div>
            <div className="w-[50px] h-[50px] bg-[#F7F8FD] flex justify-center items-center rounded-xl">
              <h1 className="text-[18px] font-[500]">{quantity}</h1>
            </div>
            <div
              className="w-[50px] h-[50px] bg-[#F7F8FD] flex justify-center items-center rounded-xl relative"
              onClick={handleAddQty}
            >
              <div className="w-[28px] h-[6px] bg-[#D66406]"></div>
              <div className="w-[28px] h-[6px] bg-[#D66406] rotate-90 absolute"></div>
            </div>
          </div>
          <div className="w-[130px] h-[50px] bg-[#D66406] flex justify-center items-center rounded-xl">
            <h1
              className="text-white font-[400] text-[18px]"
              onClick={handleAddToCart}
            >
              Add to cart
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
