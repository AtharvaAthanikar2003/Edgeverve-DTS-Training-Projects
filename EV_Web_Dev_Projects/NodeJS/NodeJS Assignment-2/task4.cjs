// Task 4: Transform stream example
const fs = require('fs');
const { Transform } = require('stream');
const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    },
});

const input = fs.createReadStream('./example.txt', 'utf8');
const output = fs.createWriteStream('./transformed.txt');

input.pipe(transformStream).pipe(output);
// Output:  Data written to file