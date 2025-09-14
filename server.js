import express from "express";
import dotenv from 'dotenv';
import { connectdb } from "./config/db.js";
import todoroutes from './routes/todo.js';

dotenv.config();
const app = express();

//connect db 
connectdb();

//middleware 
app.use(express.json());

//routes
app.use("/api/todo",todoroutes);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server started port no ${port}`);
})