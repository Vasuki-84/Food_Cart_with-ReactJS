import React, { useState } from "react";
import { TextAlignJustify, X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Home, Utensils, Percent,  Phone } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="bg-lime-400 shadow-md fixed w-full">
      {/* responsiveness */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          <div className="text-2xl font-extrabold text-red-500">
            <a href="#" className="flex items-center gap-2">
              <ShoppingCart size={18} /> Food Cart
            </a>
          </div>

          {/* Laptop & desktop */}
          <div className=" hidden md:flex space-x-6">
            <a href="#" className="flex items-center gap-2">
              <Home size={18} /> Home
            </a>
            <a href="#" className="flex items-center gap-2">
              <Utensils size={18} /> Foods
            </a>
            <a href="#" className="flex items-center gap-2">
              <Percent size={18} /> Offers
            </a>
            <a href="#" className="flex items-center gap-2">
              <Phone size={18} />Contact us
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X /> : <TextAlignJustify />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu design */}
      {isOpen && (
        <div className="md:hidden bg-lime-400 shadow-md p-3 space-y-4 ">
          <a className="block" href="#">
            Home
          </a>
          <a className="block" href="#">
            Foods
          </a>
          <a className="block" href="#">
            offers
          </a>
          <a className="block" href="#">
            Help
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
