const fs=require("fs")
console.log("writing the file")
fs.writeFile("write.txt","Hello, Welcome to MERN Stack", function(err) {   
    if(err) {
        return console.log(err)
    }
    console.log("File write completed")
    fs.readFile("file.txt", "utf8", function(err, data) {
        if(err) {
            return console.error(err)
        }
        console.log("file contents are: "+data.toString())
    });
});   