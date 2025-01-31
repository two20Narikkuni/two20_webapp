import mongoose from 'mongoose';

// Function to get the monthly donation model based on the current year and month
export const getMonthlyDonationModel = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed in JS

  const collectionName = `donations_${year}_${month}`; // e.g., donations_2025_01

  const donationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    place: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

  return mongoose.models[collectionName] || mongoose.model(collectionName, donationSchema);
};
