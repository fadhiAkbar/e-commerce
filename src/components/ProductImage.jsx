import { useState } from "react";

const ProductImage = ({ image }) => {
  const [selected, setSelected] = useState(0);

  const images = [image, "/novel.jpg", "/manga.jpg", "/buku-cerita-rakyat.jpg"];

  return (
    <div className="flex flex-col gap-4 px-40 py-16">
      <img
        src={images[selected]}
        alt=""
        className="rounded-4xl object-cover"
        style={{ width: "800px", height: "400px" }}
      />
      <div className="flex gap-4 justify-between overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Gambar Product"
            className={`rounded-lg w-24 h-24 object-cover border-2 ${
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
