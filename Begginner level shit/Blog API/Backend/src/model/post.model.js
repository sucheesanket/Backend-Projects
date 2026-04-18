import mongoose from "mongoose"
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"The title is required"],
        trim:true
    },
    slug:{
        type:String,
        lowecase:true,
        unique:[true,"this title is existed"]
    },
    content:{
        type:String,
        required:[true,"The content is must be required"],
        
    },
    summary:{
        type:String,
        default:""
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
        required:[true,"The title is required"],
        
    },
    tags:{
        type:[String],
        default:[]
    },
     status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    views: {
      type: Number,
      default: 0,
    },
},
{
    timestamps:true
})

postSchema.pre("save",function(){
    this.slug=this.title.toLowerCase().replace(/\s+/g, "-");

})

const postModel=mongoose.model("posts",postSchema)
export default postModel