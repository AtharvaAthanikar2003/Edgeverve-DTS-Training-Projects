// Task 1: Read a text file using streams
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(chunk);
});
readStream.on('error', (err) => {
    console.error(err);
});