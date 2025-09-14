import express from "express";
import dotenv from 'dotenv';
import { connectdb } from "./config/db.js";
import todoroutes from './routes/todo.js';
import { createServer } from 'vercel-node-server';

dotenv.config();
const app = express();

//connect db 
connectdb();

//middleware 
app.use(express.json());

//routes
app.use("/api/todo",todoroutes);


module.exports = createServer(app);