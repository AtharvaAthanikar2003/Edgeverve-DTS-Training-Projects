// Task 2: Process JSON file with streams
const fs=require('fs');
const jsonStream = fs.createReadStream('./data.json', 'utf8');
let jsonData = '';

jsonStream.on('data', (chunk) => {
    jsonData += chunk;
});

jsonStream.on('end', () => {
    const data = JSON.parse(jsonData);

    // Task 2a: Count total records
    console.log('Total Records:', data.length);

    // Task 2b: Calculate average age
    const averageAge = data.reduce((sum, obj) => sum + obj.age, 0) / data.length;
    console.log('Average Age:', averageAge);

    // Task 2c: Filter objects where isActive is true
    const activeObjects = data.filter((obj) => obj.isActive);
    console.log('Active Objects:', activeObjects);
});
// Output:  Total Records: 5