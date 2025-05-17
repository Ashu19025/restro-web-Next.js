import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Food Ordering App",
  description: "Order your favorite meals online!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
         <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
