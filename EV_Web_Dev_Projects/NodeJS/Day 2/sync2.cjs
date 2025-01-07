const fs=require('fs');

// ================== SYNC ====================

console.log("Synchronous Execution : ");
console.log("start");
console.log('1');
// const data = fs.readFileSync('./Day2/a.txt', 'hex');
const data = fs.readFileSync('a.txt', 'utf-8');
console.log(data);
console.log('2');
console.log('3');
console.log('end');
console.log('===========================================');

// ================= ASYNC ====================

console.log("Asynchronous Execution : ");
console.log("start");
console.log('1');
const data1 = fs.readFile('a.txt', 'utf-8', (err, data1)=>{
    if(err) throw err;
    console.log(data1);
});
console.log('2');
console.log('3');
console.log('end');