import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "";

if (!stripeSecretKey && process.env.NODE_ENV !== "production") {
  console.warn("STRIPE_SECRET_KEY is not defined");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-12-15.clover",
  appInfo: {
    name: "Ignite Shop",
  },
});
