import express from "express";
import { createtask,deletetask,getalltask, updatetask } from "../controllers/todo.js";

const router = express.Router();

router.post("/create",createtask);
router.get("/getall",getalltask);
router.put("/update/:id",updatetask);
router.delete("/delete/:id",deletetask);

export default router;