import React from 'react';
import './style.css'; // Ensure to include your existing styles

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Refund Policy</h1>
      <p>
        Thank you for your donation to our charity. We appreciate your support. Please read our refund policy below:
      </p>
      <h2>Refunds</h2>
      <p>
        Please note that all donations made to our charity are **non-refundable**. Once a donation has been made, it cannot be returned or refunded. 
      </p>
      <h2>Errors in Donation</h2>
      <p>
        If you believe you have made an error in your donation, please contact us within **30 days** of the transaction. We will review your request but cannot guarantee a refund.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about our refund policy, please reach out to us at <a href="mailto:your-email@example.com">your-email@example.com</a>.
      </p>
    </div>
  );
};

export default RefundPolicy;
