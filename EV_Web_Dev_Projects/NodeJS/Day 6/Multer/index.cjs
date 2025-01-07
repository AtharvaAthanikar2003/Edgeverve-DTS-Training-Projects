const express = require('express')
const multer = require('multer')


const app=express();
const port=3000;
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },

    filename:(req, file, cb)=>{
        cb(null, file.originalname);
    }


});

const upload= multer({storage});
app.post('/upload',upload.single('file'),(req,res)=>{
    res.send('file uploaded successfully')
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})