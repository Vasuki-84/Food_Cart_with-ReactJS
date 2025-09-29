import React, { useEffect } from 'react'

function Products() {
    const [products,setProducts] = userState([]);

    useEffect( () => {fetch("https://dummyjson.com/recipes")
        .then(response => response.json())
        .then(data => setProducts(data));

    }, []);
  return (
    <div>


    </div>
  )
}

export default Products