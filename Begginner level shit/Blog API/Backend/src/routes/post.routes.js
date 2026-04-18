import express, { Router } from "express"
import { createPost,getPostById,getPosts,updatePost,deletePost } from "../controllers/post.controller.js"

const router=express.Router()
router.post("/",createPost)
router.get("/",getPosts)
router.get("/:id",getPostById)
router.put("/:id",updatePost)
router.delete("/:id",deletePost)

export default router
