import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "../../styles/pages/success";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Compra efetuada | Ignite Shop",
  robots: "noindex",
};

export const dynamic = 'force-dynamic';

interface SuccessPageProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id } = await searchParams;
  
  if (!session_id) {
    redirect("/");
  }

  const sessionId = session_id;

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name ?? "Cliente";

  const productsImages =
    session.line_items?.data
      .map((item) => {
        const product = item.price?.product as Stripe.Product | null;
        return product?.images?.[0];
      })
      .filter((image): image is string => Boolean(image)) ?? [];

  return (
    <SuccessContainer>
      <ImagesContainer>
        {productsImages.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image} width={120} height={110} alt="" />
          </ImageContainer>
        ))}
      </ImagesContainer>

      <h1>Compra efetuada!</h1>

      <p>
        Uhuul <strong>{customerName}</strong>, sua compra de{" "}
        {productsImages.length} camisetas já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
