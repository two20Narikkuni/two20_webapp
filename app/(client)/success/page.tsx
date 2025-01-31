import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-green-600">Thank You for Your Donation!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your contribution is greatly appreciated and will help us make a difference.
        </p>
        <p className="mt-2 text-gray-600">
          If you have any questions or need assistance, feel free to contact us.
        </p>
        <div className="mt-6">
          <a href="/" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Go Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
