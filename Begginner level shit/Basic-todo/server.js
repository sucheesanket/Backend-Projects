import express from 'express'
import "dotenv/config"
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
import cookieParser from "cookie-parser";

import authRouter from "./src/routes/auth.routes.js";
import todoRouter from "./src/routes/todo.routes.js";
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/todos",todoRouter)
connectToDB()
app.listen(3000,()=>{
    console.log("The server is running on port number 3000");
    
})