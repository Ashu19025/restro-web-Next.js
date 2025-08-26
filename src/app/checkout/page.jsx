"use client"


import { useState } from "react";

export default function CheckoutPage() {
  const cartItems = [
    { id: 1, name: "Classic Cheeseburger", price: 8.99, quantity: 2 },
    { id: 2, name: "Pepperoni Pizza", price: 12.5, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Order placed!\nName: ${form.name}\nAddress: ${form.address}\nPhone: ${form.phone}\nTotal: $${total.toFixed(2)}`);
    // Reset form or redirect
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            rows={3}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
        >
          Place Order
        </button>
      </form>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <ul className="mb-4">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </section>
    </main>
  );
}
