import { urlEncoder } from "../utils/url_shortener_functions.js"
import { URL } from "../models/url.schema.js";

import dotenv from 'dotenv';
dotenv.config();

export const urlShortenerController=async(req,res)=>{
    const passed_url=req.query.url
    const encoded_text=urlEncoder(req.query.url);
    console.log(encoded_text);

    const url=await URL.findOne({
        url:passed_url
    });
    if(url){
        console.log(`${process.env.DEV}/get/${url.encodeVal}`)
        res.json({
            "Response":`${process.env.DEV}/get/${url.encodeVal}`
        })
        // res.send(`<a href=${process.env.DEV}/get/${url.encodeVal} target="_blank">Shortened URL</a>`)
    }else{

        const new_entry=new URL({
            encodeVal:encoded_text,
            url:passed_url
        })

        await new_entry.save()
    }

}