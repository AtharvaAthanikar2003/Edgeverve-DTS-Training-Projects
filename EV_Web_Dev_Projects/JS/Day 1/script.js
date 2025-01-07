var a=10;
console.log(a);
a=11;  //reassignment
console.log(a);
var a=23;  //redeclaring
console.log(a);
let val=100;
console.log(val);
val=200; //let keyword doesn't get redeclared but reassignment is possible
console.log(val);
let x=200; //global scope
// Failed to load resource: the server responded with a status of 404 (Not Found)
{
    let x=300; //block/local scope
    console.log(x);
    // if x is not defined in scope, value is not shown in console
}
// const - block scope, cannot reassign or redeclare

// const should be initialized
const pi=3.142;
// pi=9000; // don't assign other value for const variable
console.log(pi);
// Uncaught TypeError: Assignment to constant variable.
const b=500;
let c=35;
{
    const b =20;
    console.log(b);
}
console.log(b);
console.log(c);