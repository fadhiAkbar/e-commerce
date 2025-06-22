import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";
import AboutScreen from "./components/AboutScreen";
import Register from "./components/Register";
import BookList from "./components/BookList";
import Cart from "./pages/Cart";

function App() {
  const [cartQty, setCartQty] = useState(0);
  const onAddToCart = () => setCartQty(cartQty + 1);

  return (
    <Router>
      <MainApp cartQty={cartQty} onAddToCart={onAddToCart} />
    </Router>
  );
}

function MainApp({ cartQty, onAddToCart }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Navbar cartQty={cartQty} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:id"
          element={<ProductDetail onAddToCart={onAddToCart} />}
        />

        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/bookList" element={<BookList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
