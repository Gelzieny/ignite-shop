import { NextRequest, NextResponse } from "next/server";
import { IProduct } from "@/contexts/CartContext";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { products } = body as { products: IProduct[] };

    if (!products || products.length === 0) {
      return NextResponse.json(
        { error: "Products not found." },
        { status: 400 }
      );
    }

    const successUrl = `${process.env.NEXT_PUBLIC_URL || request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = process.env.NEXT_PUBLIC_URL || request.nextUrl.origin;

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: "payment",
      line_items: products.map((product) => ({
        price: product.defaultPriceId,
        quantity: 1,
      })),
    });

    return NextResponse.json(
      { checkoutUrl: checkoutSession.url },
      { status: 201 }
    );
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
