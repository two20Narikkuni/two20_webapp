import React from 'react';
import './style.css';

const AboutSection = () => {
  return (
    <div className='about-section-container font-sans'>
      <div className="about-container container mx-auto">
        <h3 className="heading">About Two20</h3>
        <p>
          At Two &apos;20, a proud project of Athani, we believe that every small contribution can create a significant impact in the lives of those who need it most. Founded on the principles of compassion and community support, our organization aims to empower individuals and families living in poverty by providing them with essential resources and opportunities for a better future. We strive to create a society where everyone has access to basic needs, education, and healthcare.
          <br /><br />
          Our monthly donation initiative encourages people to contribute just ₹20 on the 2nd of every month, making it easy and accessible for everyone to participate in the cause. Additionally, we understand that many supporters may wish to give more or donate at any time; thus, we welcome contributions of any amount at any time to further our mission. With your support, we can continue to spread hope and uplift the underprivileged, creating a ripple effect of positive change in our communities. Join us in our mission to transform lives, one donation at a time.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
