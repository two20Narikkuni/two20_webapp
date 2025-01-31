"use client";
import React, { forwardRef } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import './ps.css';

const PaymentSection = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter();

  // Function to handle button clicks
  const handleAmountClick = (amount: number) => {
    // Navigate to the /payment page with the selected amount as a query parameter
    router.push(`/payment?amount=${amount}`);
  };

  return (
    <section className='payment-section-container font-sans' id='payment-section' ref={ref}>
      <div className="payment-section container mx-auto">
        <h3>Quick Pay</h3>

        <div className="payment-buttons">
          {/* First Row: Single Button (₹20) */}
          <div className="w-full mb-4">
            <button
              onClick={() => handleAmountClick(20)}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ₹20
            </button>
          </div>

          {/* Second Row: 3 Buttons (₹40, ₹100, ₹200) */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <button
              onClick={() => handleAmountClick(40)}
              className="py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ₹40
            </button>
            <button
              onClick={() => handleAmountClick(100)}
              className="py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ₹100
            </button>
            <button
              onClick={() => handleAmountClick(200)}
              className="py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ₹200
            </button>
          </div>

          {/* Third Row: 3 Buttons (₹300, ₹500, ₹1000) */}
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleAmountClick(300)}
              className="py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ₹300
            </button>
            <button
              onClick={() => handleAmountClick(500)}
              className="py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ₹500
            </button>
            <button
              onClick={() => handleAmountClick(1000)}
              className="py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ₹1000
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

PaymentSection.displayName = 'PaymentSection';

export default PaymentSection;
