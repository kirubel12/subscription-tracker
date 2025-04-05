import mongoose from "mongoose"
import {MONGO_URI} from "../config/env.js"
import {config} from 'dotenv'
config();

if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables")
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected to MongoDB...")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
       
    }
}

export default connectDB