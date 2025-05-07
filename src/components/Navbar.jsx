import React from "react";

const Navbar = ({ cartQty }) => {
  return (
    <>
      <nav className="flex px-8 justify-between py-6 shadow-md sticky top-0 z-50">
        <h1 className="font-archivo text-2xl font-bold">Sneakers</h1>
        <div className="relative">
          <img src="/cart.svg" alt="cart icon" />
          <h1 className="w-6 h-6 bg-red-500 items-center justify-center flex rounded-full text-white font-archivo absolute -top-1 -right-1">
            {cartQty}
          </h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
