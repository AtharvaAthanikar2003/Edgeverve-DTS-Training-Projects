const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream('input1.txt').pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input1.txt.gz'));
console.log('File Compressed.');
