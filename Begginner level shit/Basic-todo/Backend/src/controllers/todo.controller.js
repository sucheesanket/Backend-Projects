import todoModel from "../models/todo.model.js"

export async function createTodo(req,res){
    try{
        const {title,description}=req.body
    const userId=req.user._id
    const todo=await todoModel.create({
        title,
        description,
        user:userId
    })
    res.status(201).json({
        message:"The note created successfull",
        success:true,
        data:todo
    })
    }
    catch(err){
        res.status(400).json({
            message:err.message,
            success:false
        })

    }


}


export async function getAllTodos(req,res){
    try{
        const userId=req.user._id;
        const todo=await todoModel.find({
           
            user:userId
        })
        res.status(200).json({
            success:true,
            message:"The todolist get successfully",
            data:todo
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })

    }
}

export async function getTodoById(req,res){
    try{
        const todoId=req.params.id;
        const todo=await todoModel.findById(todoId)
        if(!todo){
            return res.status(404).json({
                message:"The todo list of that id is not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"The todolist get successfully",
            data:todo
        })
        

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })

    }
}

export async function updateTodo(req,res){
    try{
        const todoId=req.params.id;
        const todo=await todoModel.findById(todoId)
        if(!todo){
            return res.status(404).json({
                message:"The todo list of that id is not found"
            })
        }
        if(todo.user.toString()!==req.user._id.toString()){
            return res.status(403).json({
                message:"The todolist not belongs to yours"
            })
        }
        const updateTodo=await todoModel.findByIdAndUpdate(todoId,req.body,{new:true})
        res.status(200).json({
            success:true,
            message:"The todo updated successfully",
            data:updateTodo
        })
        

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })

    }
}

export async function deleteTodo(req,res){
    try{
        const todoId=req.params.id;
        const todo=await todoModel.findByIdAndDelete(todoId)
        if(!todo){
            return res.status(404).json({
                message:"The todo list of that id is not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"The todolist get deleted successfully",
            data:todo
        })
        

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })

    }
}




