import { URL } from "../models/url.schema.js"

export const getOriginalController=async(req,res)=>{
    const encode_val=req.params.encoded;
    const url= await URL.findOne({
        encodeVal:encode_val
    })
    if(!url){
        res.status(404).json({
            "Error":"Url not found !!"
        })
    }
    res.redirect(url.url)
}