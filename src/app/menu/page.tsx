"use client";
import React from "react";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    category: "Burgers",
    price: 8.99,
    image:
      "/ClassicCheeseburger.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizzas",
    price: 12.5,
    image:
      "/pizza.jpg",
  },
  {
    id: 3,
    name: "Fresh Lemonade",
    category: "Drinks",
    price: 3.99,
    image:
      "/Lemonade.jpg",
  },
  {
    id: 4,
    name: "French Fries",
    category: "Sides",
    price: 4.5,
    image:
      "/Fries.jpg",
  },
];

export default function MenuPage() {
  const addToCart = (item: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
  }) => {
    console.log("Added to cart:", item);
  };

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-yellow-600 font-bold">{new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
               }).format(item.price)}</p>
              <button
                className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded w-full"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
