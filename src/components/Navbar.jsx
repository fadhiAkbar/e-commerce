import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartQty }) => {
  return (
    <nav className="flex px-8 justify-between py-6 shadow-md sticky top-0 z-50 bg-white">
      <h1 className="font-archivo text-2xl font-bold">
        <Link to="/bookList">Book Store</Link>
      </h1>
      <div className="flex items-center gap-20">
        <ul className="flex gap-14 font-semibold text-xl">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* Link gambar cart */}
        <div className="relative">
          <Link to="/cart">
            <img src="/cart.svg" alt="cart icon" />
            <h1 className="w-6 h-6 bg-red-500 items-center justify-center flex rounded-full text-white font-archivo absolute -top-1 -right-1">
              {cartQty}
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
