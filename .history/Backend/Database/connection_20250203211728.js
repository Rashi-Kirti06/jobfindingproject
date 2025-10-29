import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "JOB_PORTAL",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database.");
  } catch (err) {
    console.error(`Error connecting to database: ${err.message}`);
  }
};
