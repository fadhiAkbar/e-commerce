/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import { useParams } from "react-router-dom";

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();

  const books = [
    {
      id: 1,
      title: "Sabtu Bersama Bapak",
      author: "Adhitya Mulya",
      price: 100000,
      image: "/books/sabtu.jpg",
      description:
        "Novel ini mengisahkan dua bersaudara, Satya dan Cakra, yang sejak kecil ditinggal wafat oleh ayah mereka. Namun sang ayah meninggalkan video berisi pesan-pesan bijak yang ditonton setiap Sabtu. Alur berputar pada kehidupan dewasa keduanya dalam menghadapi masalah rumah tangga dan karier, dengan bimbingan 'virtual' dari sang ayah.",
    },
    {
      id: 2,
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      price: 85000,
      image: "/books/laskar.jpg",
      description:
        "Cerita ini mengikuti 10 anak miskin di Belitung yang bersekolah di sekolah Muhammadiyah. Mereka dibimbing oleh guru inspiratif Bu Muslimah dan Pak Harfan, dan berjuang menghadapi keterbatasan demi pendidikan dan mimpi mereka.",
    },
    {
      id: 3,
      title: "Manga Jujutsu Kaisen",
      author: "Tere Liye",
      price: 92000,
      image: "/books/mangaJJK.jpg",
      description:
        "Yuji Itadori memakan jari kutukan Sukuna untuk menyelamatkan temannya. Ia masuk sekolah Jujutsu dan belajar melawan kutukan jahat bersama teman-temannya dalam pertarungan penuh aksi dan sihir.",
    },
    {
      id: 4,
      title: "Buku Cerita Rakyat",
      author: "Ahmad Fuadi",
      price: 88000,
      image: "/books/buku-cerita-rakyat.jpg",
      description:
        "Kumpulan cerita rakyat Indonesia seperti Si Kancil, Timun Mas, dan Putri Salju versi lokal. Mengandung nilai moral, penuh ilustrasi menarik, dan cocok untuk anak-anak.",
    },
  ];

  const book = books.find((b) => b.id === parseInt(id));
  if (!book)
    return <div className="text-center py-10">Buku tidak ditemukan.</div>;

  const [showOrder, setShowOrder] = useState(false);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handler = () => setShowOrder(true);
    window.addEventListener("showOrderForm", handler);
    return () => window.removeEventListener("showOrderForm", handler);
  }, []);

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

  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 container">
          <ProductImage image={book.image} />
          <ProductInfo
            book={book}
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>

      {showOrder && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] space-y-4">
            <h2 className="text-xl font-bold">Formulir Pemesanan</h2>
            <p>Jumlah: {quantity}</p>
            <p>Harga: Rp{(book.price * quantity).toLocaleString("id-ID")}</p>

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
    </>
  );
};

export default ProductDetail;
