//Decompression file stream
const fs = require('fs');
const zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt

const decompression=fs.createReadStream('./input1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./output1.txt'));

decompression.on('finish',()=>{
    console.log('File Decompressed');
});