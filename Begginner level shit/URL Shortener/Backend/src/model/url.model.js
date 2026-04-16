import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        unique:[true,"The shortUrl is exist"],
        required:[true,"The shortUrl must be required"]
    },
    clickCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
const urlModel=mongoose.model("URL",urlSchema)
export default urlModel