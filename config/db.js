import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connection to mongodb database ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error in mongoDB ${error}`.bgRed.white);
  }
};

export default connectDb;
