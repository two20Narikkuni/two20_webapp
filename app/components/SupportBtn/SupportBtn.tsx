"use client";
import React from 'react';
import './sptbtn.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const SupportBtn = () => {
  const router = useRouter(); // Initialize the router

  // Function to handle the "How to Pay?" button click
  const handleHowToPayClick = () => {
    router.push('/howtopay'); // Redirect to /howtopay
  };

  return (
    <section className='support-btn-container'>
      <div className='support-btn-section container mx-auto flex items-center justify-between'>
        <button onClick={handleHowToPayClick} className='flex items-center justify-center font-sans'>
          How to Pay?
          <Image src="/request.svg" className='support-btn-image' alt="How to Pay" width={33.04} height={33.04} />
        </button>
        <button className='flex items-center justify-center font-sans'>
          Chat Support
          <Image src="/whatsapp.svg" className='support-btn-image' alt="App Support" width={33.04} height={33.04} />
        </button>
      </div>
    </section>
  );
};

export default SupportBtn;
