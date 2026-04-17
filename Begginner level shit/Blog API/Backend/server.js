import "dotenv/config"
import express from "express"
import mongoose from "mongoose";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
connectToDB()
import categoryRoutes from "./src/routes/category.routes.js"
app.use("/api/categories",categoryRoutes)

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`The server is running on port number ${PORT}`);
    
})
