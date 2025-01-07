const fs=require("fs")
var buf=new Buffer(1024)
console.log("opening an existing file")
fs.open("file.txt", "r+", function(err,fd){   
    if(err)
    {
        console.log(err)
    }
    console.log("file opened successfully")
    console.log("reading the opened file")
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes)
    {
        if(err)
        {
            console.log(err)
        }
        console.log(bytes + " bytes read")
        if(bytes > 0)
        {
            console.log(buf.slice(0, bytes).toString())
        }
        fs.close(fd, function(err)
        {
            if(err)
            {
                console.log(err)
            }
            console.log("file closed successfully")     
        })
    });
});
