"use client";
import Image from "next/image";
import menuItems from "../utils/menuData";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const { handleAddToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={150}
            className="rounded"
          />
          <h3 className="text-lg font-bold mt-2">{item.name}</h3>
          <p className="text-gray-500">{item.category}</p>
          <p className="text-green-600 font-semibold">${item.price}</p>
          <button
            onClick={() => handleAddToCart(item)}
            className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
