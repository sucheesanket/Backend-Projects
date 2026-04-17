import mongoose from "mongoose";

async function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    console.log("The server is connected to the database");
    
}
export default connectToDB