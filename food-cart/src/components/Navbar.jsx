import React, { useState } from "react";
import { TextAlignJustify, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="bg-green-300 shadow-lg fixed w-full">
      {/* responsiveness */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-extrabold text-red-500">FoodCart</div>

          {/* Laptop & desktop */}
          <div className=" hidden md:flex space-x-6">
             <a  href="#">Home</a>
             <a  href="#">Foods</a>
             <a  href="#">offers</a>
             <a  href="#">Help</a>
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
      {
        isOpen && (
        <div className="md:hidden bg-green-300 shadow-lg p-4 space-y-5 ">
            <a className="block"  href="#">Home</a>
             <a  className="block"   href="#">Foods</a>
             <a   className="block"  href="#">offers</a>
             <a   className="block"  href="#">Help</a>

        </div>
        )
      }
    </div>
  );
}

export default Navbar;
{
  /* https://dummyjson.com/recipes */
}
