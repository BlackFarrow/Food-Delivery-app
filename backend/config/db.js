import mongoose from "mongoose";

export const connectDB = async ()=>{

    await mongoose.connect("mongodb+srv://salithagayan:salitha@cluster0.o93voth.mongodb.net/food-del").then(()=>console.log("DB connected"))
}