"use client";
import React, { forwardRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import './ps.css'; // Make sure this path is correct

const PaymentSection = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter();
  const [customAmount, setCustomAmount] = useState('');
  const [customAmountError, setCustomAmountError] = useState('');

  const handleAmountClick = (amount: number) => {
    setCustomAmount('');
    setCustomAmountError('');
    router.push(`/payment?amount=${amount}`);
  };

  const handleCustomAmountSubmit = () => {
    const amountValue = parseFloat(customAmount);
    if (isNaN(amountValue) || amountValue <= 0) {
      setCustomAmountError('Please enter a valid positive amount.');
      return;
    }
    if (amountValue < 1) { // Minimum amount check
      setCustomAmountError('Minimum donation amount is ₹1.');
      return;
    }
    setCustomAmountError('');
    router.push(`/payment?amount=${amountValue}`);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
        setCustomAmount(value);
        if (value === '' || parseFloat(value) > 0) {
           setCustomAmountError('');
        }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (customAmount && parseFloat(customAmount) >= 1) {
          handleCustomAmountSubmit();
      } else {
          handleCustomAmountSubmit(); // Trigger validation
      }
    }
  };

  return (
    <section className='payment-section-container font-sans' id='payment-section' ref={ref}>
      <div className="payment-section container mx-auto">
        <h3 className='text-center'>Quick Pay</h3>

        {/* Custom Amount Section Wrapper */}
        <div className="custom-amount-wrapper mb-4">
             <label htmlFor="customAmountInput" className="sr-only">
                Enter a Custom Amount
            </label>
             {/* Flex container for Input + Button - Use Tailwind for gap */}
             {/* --- This div controls the layout --- */}
            <div className="custom-amount-input-group flex items-stretch gap-3">
              <input
                type="number"
                id="customAmountInput"
                name="customAmount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                onKeyPress={handleKeyPress}
                placeholder="Or Enter a Custom Amount (₹)"
                className="custom-amount-input flex-grow" // Input grows horizontally
                min="1"
                step="any"
                aria-label="Custom donation amount"
              />
              <button
                onClick={handleCustomAmountSubmit}
                className="payment-button custom-donate-button btn-purple flex-shrink-0" // Button maintains size
                disabled={!customAmount || parseFloat(customAmount) < 1}
              >
                Donate
              </button>
            </div>
            {/* Error Message Area */}
            {customAmountError && (
                <p className="error-message text-red-600 text-sm mt-1 text-center">{customAmountError}</p>
            )}
        </div>


        {/* Existing Preset Buttons Section */}
        <div className="payment-buttons">
          {/* First Row: Single Button (₹20) */}
          <div className="w-full mb-4">
            <button onClick={() => handleAmountClick(20)} className="payment-button w-full">
              ₹20
            </button>
          </div>

          {/* Second Row: 3 Buttons (₹40, ₹100, ₹200) */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <button onClick={() => handleAmountClick(40)} className="payment-button">₹40</button>
            <button onClick={() => handleAmountClick(100)} className="payment-button">₹100</button>
            <button onClick={() => handleAmountClick(200)} className="payment-button">₹200</button>
          </div>

          {/* Third Row: 3 Buttons (₹300, ₹500, ₹1000) */}
          <div className="grid grid-cols-3 gap-4">
            <button onClick={() => handleAmountClick(300)} className="payment-button">₹300</button>
            <button onClick={() => handleAmountClick(500)} className="payment-button">₹500</button>
            <button onClick={() => handleAmountClick(1000)} className="payment-button">₹1000</button>
          </div>
        </div>
      </div>
    </section>
  );
});

PaymentSection.displayName = 'PaymentSection';

export default PaymentSection;

//sdfljsdfsdfsdf