import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  await dbConnect(); // Connect to the database

  const { amount } = await req.json(); // Read JSON body

  // Create a new order in Razorpay
  const options = {
    amount: amount * 100, // Convert to paise
    currency: 'INR',
    receipt: `receipt#${Math.random() * 100}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log('Razorpay Order:', order); // Log Razorpay order response
    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json({ success: false, message: 'Payment initiation failed' }, { status: 500 });
  }
}
