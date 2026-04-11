import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"The username is already exists"],
        required:[true,"The username must be required"]
    },
    email:{
        type:String,
        unique:[true,"The email is already exists"],
        required:[true,"The email must be required"]
    },
    password:{
        type:String,
       
        required:[true,"The password must be required"]
    },
},{timestamps:true})
const userModel=mongoose.model("users",userSchema)
export default userModel