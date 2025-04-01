import express from 'express';
import { urlEncoder } from '../utils/url_shortener_functions.js';

const router=express.Router();


router.get('/',(req,res)=>{
    res.send('<h2>URL shortener</h2>')
    console.log("Router Res !!")
})

router.get('/:url',(req,res)=>{
    // console.log(req.params);
    urlEncoder(req.params.url);
})



export default router;