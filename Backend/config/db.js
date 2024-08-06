import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://chinmaycdr2001:767025@cluster0.sb9ciaw.mongodb.net/food-del-app").then(()=>{
        console.log("Db connected");
    })
}