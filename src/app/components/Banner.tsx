import React from "react";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg p-10 text-white flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-2">Delicious Deals Just for You!</h1>
        <p className="text-lg">Get 20% off on all orders above $25. Use code: YUMMY20</p>
      </div>
      <img
        src="/images/promo-burger.png"
        alt="Promo Burger"
        className="w-48 h-48 object-contain"
      />
    </section>
  );
}