import jwt from "jsonwebtoken";
import userModel from "../model/auth.model.js";
import bcrypt from "bcryptjs";


export async function register(req,res){
    const{username,email,password}=req.body
    const isUserAlreadyExists=await userModel.findOne({
        $or:[{email},{username}]
    })
    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"The users are already exists through the "+(isUserAlreadyExists.email===email?"email":"username"),
            success:false
        })
    }
    const hash=await bcrypt.hash(password,10)
    const user=await userModel.create({
        username,
        email,
        password:hash
    })
    const token=jwt.sign({
        id:user._id,
        username:user.username
        
    },process.env.JWT_SECRET,{expiresIn:"1d"})
    res.cookie("token",token)
    res.status(201).json({
        message:"The register is suceessfully done",
        success:true,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
}
export async function login(req,res){
    const{username,email,password}=req.body
    const user=await userModel.findOne({
        $or:[{email},{username}]
    })
    if(!user){
        return res.status(400).json({
            message:"Invalid credentials",
            success:false
        })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid credentials",
            success:false
        })
    }
    
    const token=jwt.sign({
        id:user._id,
        username:user.username
        
    },process.env.JWT_SECRET,{expiresIn:"1d"})
    res.cookie("token",token)
    res.status(200).json({
        message:"The loggined is suceessfully done",
        success:true,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
}