//import * as fs from "fs" // fs - file system from your node.js
const fs=require("fs")
console.log("start")
const data=fs.readFileSync("file.txt", "utf-8")
console.log("data", data)
console.log("end")