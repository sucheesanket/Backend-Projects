import urlModel from "../model/url.model.js";
export const shortenUrl= async (req,res)=>{
    const {originalUrl}=req.body;
    try{
        const shortUrl=Math.random().toString(36).substring(2,8);
        const url=new urlModel({originalUrl,shortUrl});
        await url.save();
        res.status(201).json({
            message:"URL shortened successfully",
            shortCode:`http://localhost:3000/${shortUrl}`,
            shortUrl
        })


    }
    catch(err){
        res.status(500).json({
            message:"Server error",
            error:err.message
        })
    }
}

export const redirectUrl= async (req,res)=>{
    const {code}=req.params;
    try{
        const url=await urlModel.findOne({shortUrl:code});
        if(!url)
        {
            return res.status(404).json({
                message:"URL not found."
            })
        }
        url.clickCount+=1;
        await url.save();

        res.redirect(url.originalUrl)

    }
    catch(err){
        res.status(500).json({
            message:"server error",
            error:err.message
        })

    }
}

export const getStats= async (req,res)=>{
    const {code}= req.params;
    try{
        const url=await urlModel.findOne({
            shortUrl:code
        })
        if(!url){
            return res.status(404).json({
                message:"URL is not found"
            })
        }
        res.status(200).json({
            originalUrl:url.originalUrl,
            shortUrl:url.shortUrl,
            clickCount:url.clickCount,
            createdAt:url.createdAt
        });

    }
    catch(err){
        res.status(500).json({
            message:"Server error",
            error:err.message
        })

    }
}

