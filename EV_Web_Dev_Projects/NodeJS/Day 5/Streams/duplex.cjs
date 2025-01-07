const fs = require('fs');
const { Duplex } = require('stream');
const readStream = fs.createReadStream('input1.txt');
const writeStream = fs.createWriteStream('output1.txt');
readStream.pipe(writeStream);