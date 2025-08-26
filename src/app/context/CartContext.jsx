"use client";
import React, { createContext, useContext, useState } from "react";
import { addToCart, removeFromCart, getCartTotal, decreaseItemQuantity } from "../utils/cartUtils";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => setCart((prev) => addToCart(prev, item));
  const handleRemoveFromCart = (id) => setCart((prev) => removeFromCart(prev, id));
  const handleDecreaseQuantity = (id) => setCart((prev) => decreaseItemQuantity(prev, id));

  const total = getCartTotal(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleDecreaseQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
