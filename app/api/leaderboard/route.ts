import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { getMonthlyDonationModel } from '@/app/lib/getMonthlyDonationModel'; // Ensure the correct import path

export async function POST(req: Request) {
  await dbConnect(); // Connect to the database

  const DonationModel = getMonthlyDonationModel(); // Get the donation model for the current month

  try {
    // Find all donations for the current month, sorted by amount in descending order
    const donations = await DonationModel.find().sort({ amount: -1 }).limit(3); // Get top 3 donors

    // Map to the required structure
    const leaderboardData = donations
      .filter(donation => donation.name !== 'Not Interested') // Exclude donations with 'Not Interested'
      .map((donation, index) => ({
        rank: index + 1,
        name: donation.name,
        location: donation.place,
        amount: donation.amount,
      }));

    return NextResponse.json({ success: true, leaderboard: leaderboardData });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
