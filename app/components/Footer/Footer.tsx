import React from 'react';
import './style.css'; // Ensure you create this CSS file

const Footer = () => {
  return (
    <footer className="footer-container font-sans">
      <div className="footer-content container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div className="footer-links">
          <a href="/privacypolicy" className="footer-link">Privacy Policy</a>
          <a href="/terms-conditions" className="footer-link">Terms and Conditions</a>
          <a href="/refund-policy" className="footer-link">Refund Policy</a>
        </div>
        <div className="parent-org mt-4 md:mt-0 flex flex-col text-right">
          <a href="https://athaninarikkuni.com" className="parent-org-link">Parent Organization: Athani</a>
          <a href="https://athaninarikkuni.com" className="parent-org-link">
          Athani Narikkuni, Parannur PO<br/>
          Narikkuni , Calicut<br/>
          India, Kerala 673585<br/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
