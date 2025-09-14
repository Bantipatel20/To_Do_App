
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectdb = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true
    })
    .then(()=>{console.log("Database Connected")})
    .catch((err)=>console.log("Erro While Connect DB"))
}

