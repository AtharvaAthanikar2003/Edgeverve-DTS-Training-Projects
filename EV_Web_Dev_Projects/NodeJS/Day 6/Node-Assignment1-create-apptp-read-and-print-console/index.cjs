const fs = require('fs');

// Path to the text file
const filePath = 'example.txt';

// Create a readable stream
const readableStream = fs.createReadStream(filePath, 'utf8');

// Handle data event to read chunks of the file
readableStream.on('data', (chunk) => {
    console.log(chunk);
});

// Handle error event in case of issues with the file
readableStream.on('error', (err) => {
    console.error('Error reading file:', err.message);
});

// Handle end event when the reading is complete
readableStream.on('end', () => {
    console.log('File reading completed.');
});
