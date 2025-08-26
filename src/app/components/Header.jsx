"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
const { cart = [] } = useCart() || {};
const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  return (
   <header className="bg-gray-900 p-4 rounded-full ">
    <div className="flex items-center justify-between">
     <div className="flex items-center gap-2">
      <Image
        className="object-cover rounded-full"
        src="/logo.jpg"
        width={40}
        height={40}
        alt="Logo"
      />
      <span className="text-white font-bold text-xl">Online Order</span>
    </div>
      <nav className="flex items-center gap-8 text-white font-semibold ">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
        <Link
          href="/cart"
          className="bg-yellow-500 rounded-full text-white px-6 py-2 flex items-center"
        >
          Cart
          <span className="ml-2 bg-yellow-700 rounded-full px-3 py-0.5 text-sm font-bold">
            {totalItems}
          </span>
        </Link>
        <Link
          className="bg-yellow-500 rounded-full text-white px-8 py-2"
          href="/login"
        >
          Login
        </Link>
      </nav>
      </div>
    </header>
  );
}