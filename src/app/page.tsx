import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import type { IProduct } from "@/contexts/CartContext";
import { HomeClient } from "./home-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Ignite Shop",
};

async function getProducts(): Promise<IProduct[]> {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data
    .map((product) => {
      const price = product.default_price as Stripe.Price | null;

      if (!price || price.unit_amount === null) {
        return null;
      }

      const amount = price.unit_amount / 100;

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(amount),
        numberPrice: amount,
        defaultPriceId: price.id,
        description: product.description || "",
      };
    })
    .filter((product): product is IProduct => product !== null);

  return products;
}

export const revalidate = 60 * 60 * 2; // 2 hours

export default async function Home() {
  const products = await getProducts();
  
  return <HomeClient products={products} />;
}
