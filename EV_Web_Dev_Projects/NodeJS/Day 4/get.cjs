const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Welcome to the home page');
})

app.get('/infy',(req,res)=>{
    res.set('Content-Type', 'text/html');
    res.send('<h1>Welcome to Infosys</h1>');
})
app.listen(5000,(err)=>{
    if(err){
        console.log('Error in server setup');
    }
    console.log('Server setup success');
})