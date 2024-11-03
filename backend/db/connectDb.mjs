import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Database.`);
    } catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1) // 1 = failure, 0 = success
    }
}