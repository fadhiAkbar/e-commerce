import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchCart = async () => {
    const res = await fetch("http://localhost:5000/cart");
    const data = await res.json();
    setCartItems(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/cart/${id}`, { method: "DELETE" });
    fetchCart();
  };

  const handleBeliSekarang = (item) => {
    setSelectedItem(item);
    setShowOrder(true);
  };

  const handlePesan = () => {
    if (!nama.trim() || !alamat.trim()) {
      alert("Semua data harus diisi!");
      return;
    }

    alert("Pesanan dikirim!");
    setShowOrder(false);
    setNama("");
    setAlamat("");
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Keranjang Belanja</h1>
      {cartItems.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="bg-white p-4 shadow rounded">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p>Jumlah: {item.quantity}</p>
              <p>Harga Satuan: Rp{item.price.toLocaleString("id-ID")}</p>
              <p>
                Total Harga: Rp
                {(item.price * item.quantity).toLocaleString("id-ID")}
              </p>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Hapus
                </button>
                <button
                  onClick={() => handleBeliSekarang(item)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Beli Sekarang
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pop-up Order */}
      {showOrder && selectedItem && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] space-y-4">
            <h2 className="text-xl font-bold">Formulir Pemesanan</h2>
            <p>Judul Buku: {selectedItem.title}</p>
            <p>Jumlah: {selectedItem.quantity}</p>
            <p>
              Harga: Rp
              {(selectedItem.price * selectedItem.quantity).toLocaleString(
                "id-ID"
              )}
            </p>

            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Alamat Pengiriman"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowOrder(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Batal
              </button>
              <button
                onClick={handlePesan}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Pesan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
