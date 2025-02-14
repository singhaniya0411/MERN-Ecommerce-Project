import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log("DB CONNECTED");
    });

    mongoose.connection.on('error', (err) => {
      console.error("DB Connection Error:", err);
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'e-commerce', // Set the database name here
    });

  } catch (error) {
    console.error("Error while connecting to DB:", error);
    throw error; // Re-throw the error if needed for further handling
  }
};

export default connectDB;