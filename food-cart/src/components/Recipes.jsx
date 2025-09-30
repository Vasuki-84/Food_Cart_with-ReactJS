import React, { useEffect, useState } from "react";
import {Star} from 'lucide-react';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        if (data.recipes && Array.isArray(data.recipes)) {
          // Add random price to each recipe
          const recipesWithPrice = data.recipes.map((recipe) => ({
            ...recipe,
            price: Math.floor(Math.random() * 200) + 100, // Random ₹100-₹300
          }));
          setRecipes(recipesWithPrice);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="font-mono ... p-4 md:p-8 bg-gray-600 min-h-screen">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-white p-4 mb-6">
        Our Recipes
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {recipes.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 shadow-md rounded p-5 flex flex-col items-center"
          >
            <img
              className="h-40 w-auto mb-4 object-contain rounded-3xl"
              src={item.image}
              alt={item.name}
            />
            <h4 className="text-lg md:text-xl font-semibold mb-2 text-center">
              {item.name}
            </h4>

            <div className="font-semibold text-lg mb-2 flex items-center gap-15">
              <p className="font-bold text-gray-600">{item.cuisine}</p>
              <p className="text-red-600 flex flex-row"><Star size={23} />{item.rating}</p>
            </div>

            {/* Display Random Price */}
            <p className="text-green-600 font-bold text-xl mb-2">
              ${item.price}
            </p>

            <button className="bg-lime-400 px-6 py-2 cursor-pointer text-red-700 rounded text-lg">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
