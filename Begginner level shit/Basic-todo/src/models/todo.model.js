import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"The title is required"],
        
    },
    description:{
        type:String,
        
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"The user is required"]
        
    }

},{timestamps:true})
const todoModel=mongoose.model("todo",todoSchema)
export default todoModel