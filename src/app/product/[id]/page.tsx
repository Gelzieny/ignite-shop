import Stripe from "stripe";
import Image from "next/image";
import type { Metadata } from "next";


import { stripe } from "@/lib/stripe";
import { ProductClient } from "./product-client";
import type { IProduct } from "@/contexts/CartContext";
import { ProductContainer, ImageContainer, ProductDetails } from "@/styles/pages/product";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = 'force-dynamic';

async function getProduct(id: string): Promise<IProduct | null> {
  try {
    const product = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });

    const price = product.default_price as Stripe.Price | null;

    if (!price || price.unit_amount === null) {
      return null;
    }

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      description: product.description || "",
      defaultPriceId: price.id,
    };
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Produto não encontrado | Ignite Shop",
    };
  }

  return {
    title: `${product.name} | Ignite Shop`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div>
        <h1>Produto não encontrado</h1>
      </div>
    );
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt={product.name} />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <ProductClient product={product} />
      </ProductDetails>
    </ProductContainer>
  );
}
