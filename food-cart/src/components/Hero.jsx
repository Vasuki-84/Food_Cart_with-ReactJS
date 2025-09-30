import React from "react";

function Hero() {
  return (
    <div
      className="bg-cover h-[400px] md-h-[400px] lg-h-[800px] flex  flex-col justify-center items-center text-center font-extrabold px-4"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/73/a2/1e/73a21ec135fd9305bf81a664a1f84690.jpg")',
      }}
    >
      <div className="bg-white/20 p-6 rounded  max-w-2xl border border-white/30 backdrop-blur-md">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow "> 15% offer on every receipes</h2>
        <p className="text-md md:text-md mb-6 text-white drop-shadow">FoodCart is out! see what's new</p>
        <button className="bg-lime-400 px-6 py-3  text-red-500  rounded text-lg">Order Now</button>
      </div>
    </div>
  );
}

export default Hero;
