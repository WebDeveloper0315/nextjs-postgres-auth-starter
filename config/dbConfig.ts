import { error } from "console";
import mongoose from "mongoose";

export function connectDB() {
    try {
        mongoose.connect(process.env.mongo_url!);

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connection successful");
        })

        connection.on("error", (error) => {
            console.log(error);
        })
    } catch (error: any) {
        console.log(error);
    }
}