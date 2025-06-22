import { useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Sabtu Bersama Bapak",
    author: "Adhitya Mulya",
    price: 100000,
    image: "/books/sabtu.jpg",
  },
  {
    id: 2,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    price: 85000,
    image: "/books/laskar.jpg",
  },
  {
    id: 3,
    title: "Manga Jujutsu Kaisen",
    author: "Tere Liye",
    price: 92000,
    image: "/books/mangaJJK.jpg",
  },
  {
    id: 4,
    title: "Buku Cerita Rakyat",
    author: "Ahmad Fuadi",
    price: 88000,
    image: "/books/buku-cerita-rakyat.jpg",
  },
];

const BookList = () => {
  const navigate = useNavigate();

  const handleBuy = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Daftar Buku Tersedia
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h2>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <p className="text-lg font-bold text-blue-600">
                Rp{book.price.toLocaleString("id-ID")}
              </p>
              <button
                onClick={() => handleBuy(book.id)}
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
