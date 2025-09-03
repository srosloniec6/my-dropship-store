"use client";
import { Button } from "./ui/button";

export default function ProductCard({ product, addToCart }: any) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="rounded mb-2" />
      <h2 className="font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Button onClick={() => addToCart(product.id)} className="mt-auto">
        Add to Cart
      </Button>
    </div>
  );
}
