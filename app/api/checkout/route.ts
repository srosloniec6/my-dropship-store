import { NextResponse } from "next/server";

// 🔹 Mock checkout (works without Stripe)
export async function POST(req: Request) {
  // Normally you’d parse the cart from req.json()
  return NextResponse.json({ url: "/checkout-success" });
}

/* 
// 🔹 Real Stripe Checkout (uncomment when ready)
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: body.items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return new NextResponse(`Stripe error: ${err.message}`, { status: 400 });
  }
}
*/
