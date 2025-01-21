import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://priyam123:priyam123@cluster0.xjddk.mongodb.net/food_delivery').then(()=>console.log('DB Connected'));
}