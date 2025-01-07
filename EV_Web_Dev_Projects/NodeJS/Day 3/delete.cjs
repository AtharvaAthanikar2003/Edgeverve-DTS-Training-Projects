const fs=require("fs")
console.log("Deleting file")
fs.unlink("file1.txt",(err)=>{   
    if(err) {
        return console.error(err)
    }    
    console.log("File deleted successfully")    
})  //delete file1.txt