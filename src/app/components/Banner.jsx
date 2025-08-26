import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg p-10 text-white flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-2">Delicious Deals Just for You!</h1>
        <p className="text-lg">Get 20% off on all orders above $25. Use code: YUMMY20</p>
      </div>
      <Image
        src="/Burger.jpg"
        width={300}
        height={300}
        alt="Promo Burger"
        className="  rounded-lg object-contain"
      />
    </section>
  );
}