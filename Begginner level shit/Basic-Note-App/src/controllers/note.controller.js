import noteModel from "../model/note.model.js";

export async function createNote(req,res){
    try{
        const {title,content,isPinned,tags}=req.body
    const user=req.user._id
    const Note=await noteModel.create({
        title,
        content,
        isPinned,
        tags,
        user
    })
    return res.status(201).json({
        message:"The note created successfully",
        success:true,
        data:Note
    })
    }
    catch(err){
        return res.status(409).json({
            message:err.message,
            success:false
        })
    }
}

export async function getNote(req,res){
    try{
      
        const userId=req.user._id
        const note=await noteModel.find({
            user:userId
        })
        res.status(200).json({
            message:"We get note successfully",
            success:true,
            data:note
        })


    }
    catch(err){
        return res.status(409).json({
            message:err.message,
            success:false
        })
    }

    
}

export async function deleteNote(req, res) {
    try {
        const userId = req.user._id

        // Step 1: Find first
        const note = await noteModel.findById(req.params.id)

        // Step 2: Check if note exists
        if (!note) {
            return res.status(404).json({
                message: "Note not found",
                success: false
            })
        }

        // Step 3: Check ownership
        if (note.user.toString() !== userId.toString()) {
            return res.status(403).json({
                message: "This note does not belong to you",
                success: false
            })
        }

        // Step 4: Safe to delete now
        await noteModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "The note is deleted successfully",
            success: true
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export async function updateNote(req,res){
    try{
        const userId=req.user._id
        const note=await noteModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json({
            message:"the note is updated successfully",
            success:true,
            data:note
        })

    }
    catch(err){
        return res.status(409).json({
            message:err.message,
            success:false
        })
    }
}