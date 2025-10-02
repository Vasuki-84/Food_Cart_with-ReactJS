import React, { useState } from "react";
import { navbarLinks } from "../data.jsx";
import { TextAlignJustify, X } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="bg-lime-400 shadow-md fixed w-full font-mono ... top-0 z-50">
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
            {navbarLinks.map((link) => (
              <a
                key={link.id}
                className="list-none flex items-center gap-2  cursor-pointer"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
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
          {navbarLinks.map((link) => (
            <a
              key={link.id}
              className="block flex flex-row  justify-start px-3 gap-2  cursor-pointer"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
