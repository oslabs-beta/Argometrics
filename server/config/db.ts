import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
        const uri = process.env.ATLAS_URI as string;
        mongoose.set('strictQuery', true);
        const connect = await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log(error);
    }
}

export default connectDB;



