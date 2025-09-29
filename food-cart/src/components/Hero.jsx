import React from "react";

function Hero() {
  return (
    <div
      className="bg-cover h-[600px] md-h-[400px] lg-h-[800px] flex  flex-col justify-center items-center text-center font-extrabold px-4"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/03/43/a6/0343a6c7b56250f97a2c5caea1d145ed.jpg")',
      }}
    >
      <div className="bg-white/20 p-6 rounded  max-w-2xl border border-white/30 backdrop-blur-md">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow "> 15% offer on every receipes</h2>
        <p className="text-md md:text-lg mb-6 text-white drop-shadow">Order now</p>
        <button className="bg-green-300 px-6 py-3 text-gray rounded text-lg">Order Now</button>
      </div>
    </div>
  );
}

export default Hero;
