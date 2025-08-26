import React from "react";

const categories = [
  { id: 1, name: "Burgers", emoji: "🍔" },
  { id: 2, name: "Pizzas", emoji: "🍕" },
  { id: 3, name: "Drinks", emoji: "🥤" },
  { id: 4, name: "Sides", emoji: "🍟" },
];

export default function FoodCategory() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Food Categories</h2>
      <div className="flex gap-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-24 hover:bg-yellow-100 transition"
          >
            <span className="text-4xl mb-2">{cat.emoji}</span>
            <span className="font-medium">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
