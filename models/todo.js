import mongoose from 'mongoose';

const todoschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    discription:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true
    }
},
{timestamps:true});

export default mongoose.model("Todo",todoschema);