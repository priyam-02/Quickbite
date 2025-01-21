import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('//Enter your database connection link here').then(()=>console.log('DB Connected'));
}
