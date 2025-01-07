const fs=require("fs")
getCurrentFilenames()
fs.rmdir("Day 3",(err)=>{
    if(err){
        return console.log(err)
    }
    console.log("Directory deleted successfully")
    getCurrentFilenames()
})
function getCurrentFilenames(){
    console.log("\nCurrent Filenames: ")
    fs.readdirSync(__dirname).forEach((file)=>{
        console.log(file)
    })
    console.log("\n")
}