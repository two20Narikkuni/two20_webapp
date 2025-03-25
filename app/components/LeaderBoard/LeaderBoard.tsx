"use client";
import React, { useEffect, useState } from 'react';
import './leader.css';

interface LeaderboardEntry {
  rank: number;
  name: string;
  location: string;
  amount: number;
}

const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch leaderboard data on component mount
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('/api/leaderboard', {
          method: 'POST', // Change to POST method
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}), // You can send an empty object or any necessary data
        });

        // Check if the response is ok
        if (!response.ok) {
          const errorText = await response.text(); // Get the response text
          console.error('Failed to fetch leaderboard:', errorText);
          throw new Error('Failed to fetch leaderboard');
        }

        const data = await response.json();
        if (data.success) {
          setLeaderboard(data.leaderboard);
        } else {
          console.error('Failed to fetch leaderboard:', data.message);
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  return (
    <section className="leaderboard-container font-sans">
      <div className="leaderboard container mx-auto">
        <h3 className="heading">Leaderboard (This Month)</h3>
        <div className="ranking-container flex flex-col gap-4">
          {leaderboard.map((entry) => (
            <div key={entry.rank} className={`${entry.rank === 1 ? '1st' : entry.rank === 2 ? '2nd' : '3rd'} rank-card flex items-center justify-between`}>
              <div className="left-side flex items-center justify-center">
                <div className="pos flex items-center justify-center">
                  {entry.rank}<span>{entry.rank === 1 ? 'st' : entry.rank === 2 ? 'nd' : 'rd'}</span>
                </div>
                <div className="name">
                  <h4>{entry.name}</h4>
                  <div className="location">{entry.location}</div>
                </div>
              </div>
              <div className="right-side">
                <h4 className='amount'>₹{entry.amount}/-</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
