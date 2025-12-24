import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("url to mongo exists", !!process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    console.log("Error connecting to MongoDB:", error.message);
  }
};
