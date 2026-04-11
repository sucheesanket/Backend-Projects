import jwt from "jsonwebtoken";
import userModel from "../model/auth.model.js";


export async function authUser(req,res,next){
    const token=req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"Token is not provided",
            success:false
        })
    }
    try{
        const decoded=jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        const user=await userModel.findById(decoded.id).select("-password")
        if(!user){
            return res.status(401).json({
                message:"User not found",
                success:false
            })
        }
        req.user=user
        next()

    }
    catch(err){
        return res.status(401).json({
            message:err.message
        })
    }

}