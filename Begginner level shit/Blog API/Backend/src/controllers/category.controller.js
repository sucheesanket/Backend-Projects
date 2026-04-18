import categoryModel from "../model/category.model.js";

export async function createCategory(req,res){
    try{
        const category=await categoryModel.create(req.body)
        res.status(201).json({
            success:true,
            message:"category is successfully created",
            data:category
        })
        
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}

export async function getCategories(req,res){
    try{
        const categories=await categoryModel.find().sort({ createdAt:-1 })
        res.status(200).json({
            success:true,
            message:"We get category suceessfully",
            data:categories
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

export async function getCategoryByID(req,res){
    try{
        const category=await categoryModel.findById(req.params.id)
        if(!category){
            return res.status(404).json({
                message:"not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"We get successfully category by id",
            data:category
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })

    }
}

export async function updateCategory(req,res){
    try{
        const category= await categoryModel.findByIdAndUpdate(req.params.id,
            req.body,
            {new:true,runValidators:true}
        );
        if(!category)
        {
            return res.status(404).json({
                success:false,
                message:"not found"
            })
        }
        res.status(200).json({
            success:true,
            data:category,
            message:"The category is updated sucessfully"
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
    

}
export async function deleteCategory(req,res){
    try{
        const category=await categoryModel.findByIdAndDelete(
            req.params.id
        )
        if(!category){
            return res.status(404).json({
                success:false,
                message:"category is not found"
            })
        }
        res.status(200).json({
            success:true,
            data:category,
            message:"The category is deleted successfully"
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}