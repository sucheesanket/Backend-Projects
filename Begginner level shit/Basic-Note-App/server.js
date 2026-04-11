import "dotenv/config"
import connectToDB from "./src/config/database.js"

import express from "express"
import app from "./src/app.js"
import authRouter from "./src/routes/auth.routes.js"
import noteRouter from "./src/routes/note.routes.js"
import cookieParser from "cookie-parser"
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/notes",noteRouter)

connectToDB()
app.listen(3000,()=>{
    console.log("The server is running on port number 3000");
    
})