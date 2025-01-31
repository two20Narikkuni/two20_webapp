"use client"; // Mark this component as a Client Component

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import './style.css';

const PaymentComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // For navigation
  const amount = searchParams.get('amount') || '500'; // Retrieve the amount from query params or default to 500
  const [hideName, setHideName] = useState(false); // State for hide name checkbox

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(e.currentTarget);

    // Prepare data for submission
    const data = {
      name: hideName ? 'Not Interested' : formData.get('name'), // Use default name if hidden
      mobile: formData.get('mobile'),
      place: formData.get('place'),
      amount: Number(amount), // Ensure amount is a number
      hideName,
    };

    // Call the API to create a payment order
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    // Check if the result is successful
    if (result.success) {
      const order = result.order;

      // Ensure order exists before using it
      if (order && order.amount) {
        // Initialize Razorpay
        const options = {
          key: process.env.RAZORPAY_KEY_ID, // Your Razorpay key id from environment variable
          amount: order.amount,
          currency: 'INR',
          name: 'Two20',
          description: 'Thank you for your donation!',
          order_id: order.id,
          handler: async (response: any) => {
            // Handle successful payment here
            await fetch('/api/donate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...data,
                paymentId: response.razorpay_payment_id,
              }),
            });
            // Redirect to success page
            router.push('/success');
          },
          modal: {
            ondismiss: function () {
              console.log('Payment modal closed');
            },
          },
        };

        const razorpay = new window.Razorpay(options); // Use Razorpay from the window object
        razorpay.open();
      } else {
        alert('Failed to create payment order. Please try again later.');
      }
    } else {
      alert('Payment initiation failed. Please try again.');
    }
  };

  return (
    <>
      <section className='payment-section-container font-sans flex items-center justify-center'>
        <div className="payment-section container mx-auto">
          <div className="amount-container text-center">
            <h2 className="amount mb-4">₹{amount}</h2>
            <div className="form-container flex items-center justify-center">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  {!hideName && ( // Conditionally render input based on hideName
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  )}
                  <div className="mt-2 flex items-center">
                    <input
                      type="checkbox"
                      id="hideName"
                      name="hideName"
                      onChange={(e) => setHideName(e.target.checked)} // Update state on checkbox change
                      className="mr-2"
                    />
                    <label htmlFor="hideName" className="text-sm text-gray-600">
                      Hide Name (Participate without revealing your name)
                    </label>
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="place"
                    placeholder="Place"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                  >
                    Donate Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentComponent />
    </Suspense>
  );
};

export default Page;