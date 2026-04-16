import mongoose from "mongoose"
async function connectToDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("The Server is connected to the database");
    
}

export default connectToDB