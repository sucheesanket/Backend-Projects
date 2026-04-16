import express from "express"
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "../controllers/todo.controller.js"
import { authUser } from "../middleware/auth.middleware.js"

const todoRouter=express.Router()
todoRouter.post("/",authUser,createTodo)
todoRouter.get("/",authUser,getAllTodos)
todoRouter.get("/:id",authUser,getTodoById)
todoRouter.put("/:id",authUser,updateTodo)
todoRouter.delete("/:id",authUser,deleteTodo)

export default todoRouter

