const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
let data=' '
const readStream=fs.createReadStream("input.txt")
readStream.setEncoding('utf8')
readStream.on('data', function(chunk) {
    data+=chunk
})
readStream.on('end', function() {
    console.log(data)
})
readStream.on('error', function(err) {
    console.log(err.stack)
})