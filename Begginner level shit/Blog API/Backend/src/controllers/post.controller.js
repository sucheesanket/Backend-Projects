import postModel from "../model/post.model.js";

export async function createPost(req,res){
    try{
        const post=await postModel.create(req.body)
        res.status(201).json({
            success:true,
            message:"The post is created suceessfully",
            data:post
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

export async function getPosts(req,res){
    try{
        const {category,status,tags}=req.query
        const filter={}
        if(category) filter.category=category;
        if(status) filter.status=status;
        if(tags) filter.tags={$in : tags.split(",")};

        const posts=await postModel.find(filter)
        .populate("category","name slug")
        .sort({createdAt:-1})

        res.status(200).json({
            success:true,
            count:posts.length,
            data:posts
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

export async function getPostById(req,res){
    try{
        const post=await postModel.findById(req.params.id)
        .populate("category","name slug")

        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            })
        }
        post.views+=1;
        await post.save();
        res.status(200).json({
            success:true,
            message:"We get the post by his id ",
            data:post
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message

        })

    }
}

export async function updatePost(req,res){
    try{
        const post= await postModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        ).populate("category","name slug")
        if(!post){
            return res.status(404).json({
                success:false,
                message:"post not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"We update the post successfully",
            data:post
        })
        

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

export async function deletePost(req,res){
    try{
        const post=await postModel.findByIdAndDelete(req.params.id)
        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"The post is deleted successfully",
            data:post
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}