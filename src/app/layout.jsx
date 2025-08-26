import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";

export const metadata = {
  title: "Food Ordering App",
  description: "Order your favorite meals online!",
};

export default function RootLayout({ children }) {
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
