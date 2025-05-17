import React from "react";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg p-10 text-white flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-2">Delicious Deals Just for You!</h1>
        <p className="text-lg">Get 20% off on all orders above $25. Use code: YUMMY20</p>
      </div>
      <img
        src="https://i.pinimg.com/736x/11/c4/1b/11c41bee8a8ade2a3513ad8f02d0aee2.jpg"
        alt="Promo Burger"
        className="w-40  rounded-lg object-contain"
      />
    </section>
  );
}