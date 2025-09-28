import React, { useState } from "react";
import { TextAlignJustify, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="bg-green-300 shadow-lg fixed w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center"> 
          <div className="text-2xl font-extrabold text-red-500">FoodCart</div>

          <div className=" hidden md:flex">
            <a href="#">Home</a>
            <a href="#">Foods</a>
            <a href="#">offers</a>
            <a href="#">Help</a>
          </div>
        </div>
        {/* https://dummyjson.com/recipes */}
      </div>
    </div>
  );
}

export default Navbar;
