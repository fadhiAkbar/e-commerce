import React, { useState } from "react";

const images = [
  "/model-sepatu-1.png",
  "/model-sepatu-2.jpg",
  "/model-sepatu-3.jpg",
  "/model-sepatu-4.jpg",
];

const ProductImage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4 px-40 py-16">
      <img src={images[selected]} alt="" className="rounded-4xl" />
      <div className="flex gap-4 justify-between overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Gambar Product"
            className={`rounded-lg w-24 border-2 ${
              selected === index ? "border-black" : "border-transparent"
            }`}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
