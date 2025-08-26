"use client";

import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, handleAddToCart, handleRemoveFromCart, handleDecreaseQuantity, total } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty 😔</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-amber-600 shadow-md rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-white-500">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="px-3 py-1 bg-black rounded"
                >
                  -
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="px-3 py-1 bg-black rounded"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-4">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-white hover:text-red-700 font-semibold rounded border-amber-100 border px-3 py-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-end items-center mt-6 p-4 bg-amber-600 rounded-lg font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
