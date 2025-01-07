const fs=require("fs")
const path=require("path")
fs.mkdir(path.join(__dirname,"Day 3"),(err)=>{
    if(err){
        return console.log(err)
    }
    console.log("Directory created successfully")
})