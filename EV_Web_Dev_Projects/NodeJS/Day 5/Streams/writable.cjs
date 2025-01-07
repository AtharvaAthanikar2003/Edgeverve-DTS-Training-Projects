const fs = require('fs');
const writable = fs.createWriteStream('output.txt');
writable.write('Hello Everyone, Welcome to Edgeverve Systems Limited.\n');
writable.end();