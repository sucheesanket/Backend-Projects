import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
    title:{
        type:String,
        unique:[true,"The title is exist"],
        
        trim:true
    },
    
    slug:{
        type:String,
        lowercase:true,
        unique:[true,"The slug is exist"]
    },
    description:{
        type:String,
        default:"",
    },

},{timestamps:true})

categorySchema.pre("save",function(){
    this.slug = this.title.toLowerCase().replace(/\s+/g, "-");
    

})

const categoryModel=mongoose.model("categories",categorySchema);
export default categoryModel