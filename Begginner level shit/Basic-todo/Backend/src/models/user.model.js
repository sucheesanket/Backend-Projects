import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"the username must be unique"],
        required:[true,"the username must be required"]
    },
    email:{
        type:String,
        unique:[true,"the email must be unique"],
        required:[true,"the email must be required"]
    },
    password:{
        type:String,
        
        required:[true,"the password must be required"]
    },
},{timestamps:true})
const userModel=mongoose.model("User",userSchema)
export default userModel