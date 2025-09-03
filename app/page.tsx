"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartDrawer from "../components/CartDrawer";
import ProductCard from "../components/ProductCard";
import { CATALOG } from "../lib/catalog";

export default function Page() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);

  const addToCart = (id: number) => {
    setCart((c) => {
      const found = c.find((x) => x.id === id);
      return found ? c.map((x) => x.id === id ? { ...x, qty: x.qty + 1 } : x) : [...c, { id, qty: 1 }];
    });
    setCartOpen(true);
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Dropship Store</h1>
        <button onClick={() => setCartOpen(true)} className="relative">
          <ShoppingCart />
          {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">{cart.length}</span>}
        </button>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CATALOG.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>

      <CartDrawer open={cartOpen} setOpen={setCartOpen} cart={cart} setCart={setCart} />
    </main>
  );
}
