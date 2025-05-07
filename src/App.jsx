import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cartQty, setCartQty] = useState(0);

  const onAddToCart = () => {
    setCartQty(cartQty + 1);
  };

  return (
    <>
      <Navbar cartQty={cartQty} />
      <ProductDetail onAddToCart={onAddToCart} />
    </>
  );
}

export default App;
