// utils/cartUtils.js

// Add item to cart
export const addToCart = (cart, item) => {
  const existing = cart.find((i) => i.id === item.id);
  if (existing) {
    return cart.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};

// Remove item from cart
export const removeFromCart = (cart, itemId) => {
  return cart.filter((i) => i.id !== itemId);
};

// Calculate total amount
export const getCartTotal = (cart) => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};


// reduce car items 

export const decreaseItemQuantity = (cart, itemId) => {
  return cart
    .map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0); // remove item if quantity is 0
};