import React from "react";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      price: 8.99,
      quantity: 2,
      image: "/images/cheeseburger.jpg",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 12.5,
      quantity: 1,
      image: "/images/pepperoni-pizza.jpg",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 items-center border-b pb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-yellow-600 font-bold">${item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                <label>Qty:</label>
                <input
                  type="number"
                  defaultValue={item.quantity}
                  min="1"
                  className="w-16 border rounded px-2 py-1"
                />
                <button className="text-red-500 hover:underline ml-4">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <a
          href="/checkout"
          className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
        >
          Checkout
        </a>
      </div>
    </main>
  );
}
