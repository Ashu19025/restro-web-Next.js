"use client"
import Head from "next/head";
import { useCart } from "../context/CartContext";
import React from "react";
import CartPage from "../cart/page";
const menuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    category: "Burgers",
    price: 8.99,
    image: "https://i.pinimg.com/736x/4a/9e/b5/4a9eb54e61026b01b186d5dd869a19df.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizzas",
    price: 12.5,
    image: "https://i.pinimg.com/736x/9f/07/ca/9f07ca45829cd07b6fee2c9506822496.jpg",
  },
  {
    id: 3,
    name: "Fresh Lemonade",
    category: "Drinks",
    price: 3.99,
    image: "https://i.pinimg.com/736x/5b/01/87/5b01871234d5116fe260e03a9e0b5192.jpg",
  },
  {
    id: 4,
    name: "French Fries",
    category: "Sides",
    price: 4.5,
    image: "https://i.pinimg.com/736x/6e/7b/5e/6e7b5e91357a7ce785a75d3449c1ded5.jpg",
  },
];

export default function MenuPage() {
    function addToCart(item: { id: number; name: string; category: string; price: number; image: string; }): void {
        throw new Error("Function not implemented.");
    }

  return (
    
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-yellow-600 font-bold">${item.price.toFixed(2)}</p>
              <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded w-full"
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


