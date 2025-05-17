import React from "react";

const featured = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 8.99,
    image: "https://i.pinimg.com/736x/4a/9e/b5/4a9eb54e61026b01b186d5dd869a19df.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 12.5,
    image: "https://i.pinimg.com/736x/9f/07/ca/9f07ca45829cd07b6fee2c9506822496.jpg",
  },
  {
    id: 3,
    name: "Fresh Lemonade",
    price: 3.99,
    image: "https://i.pinimg.com/736x/5b/01/87/5b01871234d5116fe260e03a9e0b5192.jpg",
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
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-yellow-600 font-bold">${item.price.toFixed(2)}</p>
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