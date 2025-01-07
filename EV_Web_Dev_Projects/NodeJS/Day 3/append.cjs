const fs = require("fs");
let data = "This is a Node.js Tutorial";
fs.appendFile("file1.txt", data, "utf-8", function(err) {
    if (err) {
        throw err;
    }
    console.log("Data is appended to file");
});  // Data is appended to file