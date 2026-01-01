import Stripe from "stripe";

let stripeInstance: Stripe | null = null;

function getStripe(): Stripe {
  if (stripeInstance) {
    return stripeInstance;
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    throw new Error("STRIPE_SECRET_KEY is not defined");
  }

  stripeInstance = new Stripe(stripeSecretKey, {
    apiVersion: "2025-12-15.clover",
    appInfo: {
      name: "Ignite Shop",
    },
  });

  return stripeInstance;
}

export const stripe = new Proxy({} as Stripe, {
  get: (target, prop) => {
    const stripeInstance = getStripe();
    const value = stripeInstance[prop as keyof Stripe];
    return typeof value === 'function' ? value.bind(stripeInstance) : value;
  },
});
