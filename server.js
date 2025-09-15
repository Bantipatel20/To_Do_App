import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./config/db.js";
import todoroutes from "./routes/todo.js";
import cors from 'cors';
dotenv.config();
const app = express();

// Connect to DB
connectdb();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/todo", todoroutes);

// Export Express app as serverless function
export default app;