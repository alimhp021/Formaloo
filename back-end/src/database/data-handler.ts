import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const makeDataHandler = () => {
    if (!process.env.DB_CONNECTION_STRING) {
        throw new Error("Connection string is not set in environment variables.");
    }
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to Mongo DB");
    });
    return mongoose;
}