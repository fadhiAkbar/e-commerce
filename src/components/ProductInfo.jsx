const ProductInfo = ({ book, quantity, setQuantity, onAddToCart }) => {
  const handleAddQty = () => setQuantity(quantity + 1);
  const handleRemoveQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = async () => {
    const cartItem = {
      title: book.title,
      price: book.price,
      quantity: quantity,
      image: book.image,
    };

    try {
      const res = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItem),
      });

      if (res.ok) {
        alert("Berhasil ditambahkan ke keranjang!");
        onAddToCart(); // optional untuk update UI
      } else {
        alert("Gagal menambahkan ke keranjang.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menambahkan.");
    }
  };

  return (
    <div className="max-w-[520px] flex flex-col justify-center">
      <h1 className="font-inter text-[#757575] font-[700] text-xl">
        {book.author}
      </h1>
      <h1 className="font-inter font-[700] text-[36px]">{book.title}</h1>
      <p className="font-inter font-[400] text-[16px] text-[#757575]">
        {book.description}
      </p>

      <div className="flex text-[20px] gap-[10px] font-inter mt-5">
        <h1 className="font-[700]">Rp{book.price.toLocaleString("id-ID")}</h1>
        <h1 className="line-through text-gray-400">
          Rp{(book.price * 1.5).toLocaleString("id-ID")}
        </h1>
      </div>

      {/* Tombol Quantity dan Add */}
      <div className="flex gap-[20px] mt-[75px] mb-10">
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

        {/* Tombol Add to Cart */}
        <div className="w-[130px] h-[50px] bg-[#D66406] flex justify-center items-center rounded-xl">
          <h1
            className="text-white font-[400] text-[18px] cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to cart
          </h1>
        </div>
      </div>

      {/* Tombol Beli */}
      <div
        className="w-[130px] h-[50px] bg-green-600 flex justify-center items-center rounded-xl cursor-pointer"
        onClick={() => window.dispatchEvent(new Event("showOrderForm"))}
      >
        <h1 className="text-white font-[400] text-[18px]">Beli Sekarang</h1>
      </div>
    </div>
  );
};

export default ProductInfo;
