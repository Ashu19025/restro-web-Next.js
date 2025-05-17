"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";




const LoginPage = () => {
  
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Login</h1>

        <label htmlFor="email" className="block text-lg font-medium mb-1 text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full border text-black  border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />

        <label htmlFor="password" className="block text-black text-lg font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full border text-black border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
        <div className="flex justify-center">
        <button
        
          className="mx-auto  w-25 p-3 rounded-md  font-medium text-white bg-blue-500   hover:bg-blue-600 transition duration-200 disabled:opacity-50"
        >
            Login
        </button>
        </div>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
       
      </div>
    </div>
  );
};

export default LoginPage;