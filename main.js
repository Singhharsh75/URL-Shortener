import express from 'express'
import urlShortener from './routes/urlShortener.js'

const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>CLI Server !!</h1>");
    console.log('res sent !');
})

app.use('/short',urlShortener)

app.listen(8080,()=>{
    console.log("Server hosted !!")
})