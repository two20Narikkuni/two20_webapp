import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { getMonthlyDonationModel } from '@/app/lib/getMonthlyDonationModel'; // Use named import

export async function POST(req) {
  await dbConnect(); // Connect to the database

  const { name, mobile, place, amount, hideName, paymentId } = await req.json();

  // Get the donation model for the current month
  const Donation = getMonthlyDonationModel(); // Get the donation model

  // Check for existing donation by mobile number
  try {
    const existingDonation = await Donation.findOne({ mobile });

    if (existingDonation) {
      // Update the existing donation
      existingDonation.amount += Number(amount); // Add the new amount
      existingDonation.name = hideName ? 'Not Interested' : name; // Update name if not hiddnn
      existingDonation.place = place; // Update place
      existingDonation.createdAt = new Date(); // Update the date to now
      await existingDonation.save(); // Save the updated donation record
    } else {
      // Create a new donation record
      const donation = new Donation({
        name: hideName ? 'Not Interested' : name,
        mobile,
        place,
        amount,
        paymentId,
        createdAt: new Date(), // Set current date for new donation
      });
      await donation.save();
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving donation:', error);
    return NextResponse.json({ success: false, message: 'Failed to save donation' }, { status: 500 });
  }
}
