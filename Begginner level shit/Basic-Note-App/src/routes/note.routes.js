import express from "express"
import { createNote,getNote,updateNote,deleteNote } from "../controllers/note.controller.js"
import { authUser } from "../middleware/auth.middleware.js"


const noteRouter=express.Router()
noteRouter.post("/",authUser,createNote)
noteRouter.get("/",authUser,getNote)
noteRouter.put("/:id",authUser,updateNote)
noteRouter.delete("/:id",authUser,deleteNote)

export default noteRouter