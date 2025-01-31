import mongoose, { Connection } from 'mongoose'; // Import Connection for typing

// Define the global type for mongoose connection
interface GlobalMongoose {
  conn: Connection | null; // Use Connection type
  promise: Promise<Connection> | null;
}

// Extend the NodeJS global namespace to include mongoose properties
declare global {
  namespace NodeJS {
    interface Global {
      mongoose: GlobalMongoose;
    }
  }
}

const MONGODB_URI = process.env.MONGODB_URI; // Get MongoDB URI from environment variables

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Ensure MONGODB_URI is treated as a string
const mongoUri: string = MONGODB_URI; // Type assertion to string

let cached = global.mongoose as GlobalMongoose | undefined; // Use undefined to check if cached exists

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn; // Return existing connection
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoUri).then((mongooseInstance) => {
      console.log('✅ Connected to MongoDB successfully!'); // Log success message
      return mongooseInstance.connection; // Return the connection object
    }).catch((error) => {
      console.error('❌ Failed to connect to MongoDB:', error); // Log error message
      throw error;
    });
  }

  cached.conn = await cached.promise; // Wait for connection to complete
  return cached.conn;
}

export default dbConnect;
