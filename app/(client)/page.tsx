import AboutSection from "../components/AboutSection/AboutSection";
import Hero from "../components/Hero/Hero";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import PaymentSection from "../components/PaymentSection/PaymentSection";
import SupportBtn from "../components/SupportBtn/SupportBtn";

import dbConnect from '@/lib/db';

async function testConnection() {
  try {
    await dbConnect();
    console.log('Connection test successful!');
  } catch (error) {
    console.error('Connection test failed:', error);
  }
}

testConnection();

export default function Home() {
  return (
    <div>
      <Hero
        title="Empower Change with Just ₹20"
        subtext="Join hands with Athaani and make a difference in the lives of those in need. Your small contribution can create a significant impact. Donate ₹20 on the 2nd of every month, or give more anytime, and help us spread hope and support to the underprivileged."
        btntext="Donate Now"
      />
      <SupportBtn />
      {/* Add a key to the PaymentSection component */}
      <PaymentSection key="payment-section" />
      <AboutSection/>
      <LeaderBoard />
    </div>
  );
}