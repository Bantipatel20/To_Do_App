import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Database Connected");
  } catch (err) {
    console.error("❌ Error While Connecting DB:", err.message);
  }
};
