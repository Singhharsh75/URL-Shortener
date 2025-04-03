import express from 'express';
import urlShortener from './routes/urlShortener.js'
import getOriginalUrl from './routes/getOriginalUrl.js'
import mongoConnect from './Db/mongoConnect.js';

const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>CLI Server !!</h1>");
    console.log('res sent !');
})

app.use('/short',urlShortener)

app.use('/get',getOriginalUrl)

app.listen(8080,()=>{
    console.log("Server hosted !!")
    mongoConnect()
})