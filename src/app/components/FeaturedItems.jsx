import React from "react";
import Image from "next/image";

const featured = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 8.99,
    image: "/ClassicCheeseburger.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 12.5,
    image: "/pizza.jpg",
  },
  {
    id: 3,
    name: "Fresh Lemonade",
    price: 3.99,
    image: "/Lemonade.jpg",
  },
];

export default function FeaturedItems() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Popular Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {featured.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="w-60 h-50 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-yellow-600 font-bold">₹{item.price.toFixed(2)}</p>
              <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}