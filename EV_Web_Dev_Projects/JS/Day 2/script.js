carName="volvo";
var carName;
console.log(carName);

// Output should show undefiend but shows volvo as a value is initialized, known as Hoisting
// If we put let instead of var, error comes as- Uncaught ReferenceError: Cannot access 'carName' before initialization
// If we put const instead of var, error comes as- Uncaught SyntaxError: Missing initializer in const declaration

{
    var a=5;  // even it's block scope, value is accessed by everyone
}
console.log(a);
{
    let a=5;  // it gets error after removing var, const codes given. here, legal shadowing takes place, shadowing var by using let
}
console.log(a);
{
    const a=5;
}
console.log(a);
let b="JS";
// var b="js";
console.log(b);
// illegal shadowing - variable declared using let is redeclared using var
// error comes as- Identifier 'b' has already been declared

console.log(count);
var count=4;
// for var, it gives o/p as undefined and for let, const, it gets error as- Cannot access 'count' before initialization

let str="JS";
console.log(typeof(str));
console.log(typeof(77));

var a=-3;
console.log(++a); // +(-3) = -3, so, do ++a to get -2

x=4
y=x++
console.log(y); // value of y is 4, x=5 as it's post increment of old value

x=4
y=++x
console.log(y); // value of both x,y is 5 as it's pre increment of new value

var z=5
z=z++ //5
console.log(z); //5

x=4
y=--x
console.log(x);

val=false
console.log(!val);
console.log(!0);
console.log(!null);
console.log(!true);
console.log(!-3);

// bitwise not
// x -> -(x+1)
a=1;
a=3.14;
a=true;
console.log(~a);

// loose equality -> type coercion (casting)
const c=100;
const d='100';
console.log(a==b);

// Either operand is a string, the other operand will be converted to string
let e = 42;
console.log(e == "42"); // Output: true (number is converted to string)

// Either operand is a number, the other operand will be converted to number
let f = 1;
console.log(f == 1);

// Either operand is a boolean, the other operand will be converted to number
let g = false;
console.log(g == 0); // Output: true (true is converted to 1)

// Either operand is a undefined/null, the other operand will be converted to undefined/null
let value = null;
console.log(value == undefined); // Output: true (null is loosely equal to undefined)