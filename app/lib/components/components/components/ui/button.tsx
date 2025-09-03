"use client";
import { cn } from "../../lib/currency";

export function Button({ children, className, variant = "default", ...props }: any) {
  const styles =
    variant === "ghost"
      ? "px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
      : "px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded";

  return (
    <button className={cn(styles, className)} {...props}>
      {children}
    </button>
  );
}
