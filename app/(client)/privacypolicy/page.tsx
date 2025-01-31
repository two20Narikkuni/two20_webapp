import React from 'react';
import './style.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Privacy Policy</h1>
      <p>
        This Privacy Policy describes how your personal information is collected, used, and shared when you donate to our charity through our website.
      </p>
      <h2>Information We Collect</h2>
      <p>
        When you make a donation, we collect the following information:
        <ul>
          <li>Name</li>
          <li>Mobile Number</li>
          <li>Place</li>
          <li>Donation Amount</li>
          <li>Payment Information</li>
        </ul>
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use your information to:
        <ul>
          <li>Process your donations</li>
          <li>Communicate with you about your donations</li>
          <li>Improve our services and website</li>
        </ul>
      </p>
      <h2>Sharing Your Information</h2>
      <p>
        We may share your personal information with third parties to help us use your information as described above.
      </p>
      <h2>Your Rights</h2>
      <p>
        You have the right to request access to the personal information we hold about you and to ask for corrections.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
