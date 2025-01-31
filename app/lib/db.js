import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // Replace with your MongoDB URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('✅ Connected to MongoDB successfully!'); // Log success message
      return mongoose;
    }).catch((error) => {
      console.error('❌ Failed to connect to MongoDB:', error); // Log error message
      throw error;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;