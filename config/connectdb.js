import mongoose from 'mongoose';
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();
const connectDB = async (DATABASE_URL) => {
  try {
    const DATABASE_URL = process.env.DATABASE_URL;
    const DB_OPTIONS = {
      dbName: "Pepper_cloud",
    };
    mongoose.set("strictQuery", false);
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;