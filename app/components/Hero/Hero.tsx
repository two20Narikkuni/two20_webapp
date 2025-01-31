"use client"; // Mark this as a Client Component

import React from 'react';
import './hero.css';
import Image from 'next/image';

// Define the type for the props
interface HeroProps {
  title: string;       // Title is a string
  subtext: string;     // Subtext is a string
  btntext: string;     // Button text is a string
}

const Hero: React.FC<HeroProps> = ({ title, subtext, btntext }) => {
  const handleScroll = () => {
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-container-main">
      <div className="hero-container container mx-auto flex items-center justify-center flex-col">
        <h1 className='font-sans'>{title}</h1>
        {/* <p className='font-sans'>{subtext}</p>
        <button className='font-sans' onClick={handleScroll}>
          {btntext}
          <Image src="/down_arrow.svg" alt="Scroll Down" width={30} height={30} />
        </button> */}
      </div>
    </section>
  );
};

export default Hero;