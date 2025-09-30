import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-800 text-white text-center p-4 mt-10 text-sm md:text-base'>

        <p>&copy; {new Date().getFullYear()} | FoodCart. All rights Reserved</p>
    </footer>
  )
}

export default Footer