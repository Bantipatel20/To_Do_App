import Todo from "../models/todo.js";

export const createtask = async(req , res)=>{
    try{
        const {title,discription,completed,date} = req.body;

        const task =  await Todo.create({title,discription,completed,date});

        res.status(201).json(task);
    }catch(err){
        res.status(500).json({message:"Error Creating Task"})
    }
}

export const getalltask = async(req,res)=>{
    try{
        const task = await Todo.find().sort({createAt:-1})
        res.json(task);
    }catch(err){
        res.status(500).json({message:"Error Fetching Task"})
    }
}

export const updatetask = async(req,res)=>{
    try{
        const update = req.body;
        
        const task = await Todo.findByIdAndUpdate(req.params.id,update,{new:true});
        
        res.json(task);
    }catch(err){
        res.status(500).json({message:"Error Updating Task"})
    }
}

export const deletetask = async(req,res)=>{
    try{
        
        await Todo.findByIdAndDelete(req.params.id);
     
        res.json({message:"Delete Task"});
    }catch(err){
        res.status(500).json({message:"Error Updating Task"})
    }
}
