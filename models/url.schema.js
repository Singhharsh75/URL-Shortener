import mongoose from "mongoose";

const mongoSchema=new mongoose.Schema({
    encodeVal:{
        type:String,
        required:true,
        unique:true,
    },
    url:{
        type:String,
        required:true,
        unique:true,
    },
    entryTime:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true});

export const URL=new mongoose.model('URL',mongoSchema);