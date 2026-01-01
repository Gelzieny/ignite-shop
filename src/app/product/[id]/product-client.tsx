"use client";

import type { IProduct } from "@/contexts/CartContext";
import { useCart } from "@/hooks/useCart";


interface ProductClientProps {
  product: IProduct;
}

export function ProductClient({ product }: ProductClientProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart();

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id);

  return (
    <button disabled={itemAlreadyInCart} onClick={() => addToCart(product)}>
      {itemAlreadyInCart ? "Produto já está no carrinho" : "Colocar na sacola"}
    </button>
  );
}
