import "dotenv/config"
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
import express from 'express'
connectToDB()
app.listen(3000,()=>{
    console.log("The server is running on port number 3000");
    
})