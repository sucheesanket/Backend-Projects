import mongoose from "mongoose";

const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"the title must be required"]
    },
    content:{
        type:String,
        required:[true,"the content must be required"]
    },
    isPinned:{
        type:Boolean,
        default:false,


    },
    tags:[String],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"the user must be required"]
    },
},{timestamps:true})

const noteModel=mongoose.model("notes",noteSchema)
export default noteModel