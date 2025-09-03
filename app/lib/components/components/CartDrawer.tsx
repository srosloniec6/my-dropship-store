"use client";
import { Button } from "./ui/button";
import { CATALOG } from "../lib/catalog";

export default function CartDrawer({ open, setOpen, cart, setCart }: any) {
  const total = cart.reduce((sum: number, item: any) => {
    const product = CATALOG.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  return (
    open && (
      <div className="fixed inset-0 bg-black/50 flex justify-end">
        <div className="bg-white w-80 p-4 flex flex-col">
          <h2 className="font-bold mb-4">Your Cart</h2>
          <ul className="flex-1">
            {cart.map((item: any) => {
              const product = CATALOG.find((p) => p.id === item.id);
              return (
                <li key={item.id} className="mb-2">
                  {product?.name} x {item.qty}
                </li>
              );
            })}
          </ul>
          <p className="font-semibold mb-2">Total: ${total.toFixed(2)}</p>
          <Button onClick={() => alert("Checkout flow goes here!")}>Checkout</Button>
          <Button variant="ghost" onClick={() => setOpen(false)} className="mt-2">
            Close
          </Button>
        </div>
      </div>
    )
  );
}
