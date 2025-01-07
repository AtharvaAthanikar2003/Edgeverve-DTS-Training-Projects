// Task 3: Generate and write data to a file
const fs = require('fs');
const writeStream = fs.createWriteStream('./output.txt');
const strings = ['Node.js', 'Streams', 'Multer', 'File Upload'];
strings.forEach((str) => {
    writeStream.write(str + '\n');
});
writeStream.end();
writeStream.on('finish', () => {
    console.log('Data written to file');
});
// Output:  Data written to file