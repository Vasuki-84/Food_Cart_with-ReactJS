import React, { useEffect, useState } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <div className='p-4 md:p-8 bg-gray-600'>
      <h3 className='text-2xl md:text-3xl font-bold text-center text-white p-4 mb-6'>Our Recipes</h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          recipes.map((item) => (
            <div key={item.id} className='bg-gray-100 shadow-md rounded p-5 flex flex-col items-center '>
              <img className='h-40 w-auto mb-4 object-contain rounded-3xl' src={item.image} alt={item.name} />
              <h4 className='text-lg md:text-xl font-semibold mb-2 text-center'>{item.name}</h4>
              <div className=' font-semibold text-lg mb-2 flex items-center gap-10'>
                <p className="font-bold text-gray-600">{item.cuisine} </p>
              <p className=" text-red-600">Rating: {item.rating}</p> 
              </div>
              <button className='bg-lime-400 px-6 py-2 cursor-pointer text-red-700 rounded text-lg'>View Recipe</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Recipes;

