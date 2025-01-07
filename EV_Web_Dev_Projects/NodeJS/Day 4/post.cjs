const express=require('express');
const app=express();
const PORT=5000;
app.use(express.json());
app.post('/',(req,res)=>{
    const {name}=req.body;
    res.send('Welcome to the home page');
})
app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in server setup');
    }
    console.log('Server setup success');
})