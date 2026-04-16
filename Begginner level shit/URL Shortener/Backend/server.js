import "dotenv/config"
import urlRoutes from "./src/routes/url.routes.js"
import { redirectUrl } from "./src/controllers/urlController.js";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
import mongoose from "mongoose";
import express from "express";
connectToDB()
app.use(express.json())
app.use("/api",urlRoutes)
app.use("/:code",redirectUrl)
app.listen(3000,()=>{
    console.log("The server is running on the port number 3000");
    
})