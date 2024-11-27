// truthy - true, non empty string, numbers, arrays, objects, functions
// falsy - false, null, undefined, 0-0, NaN

//if () {if block}
//"hello" - truthy
//42, ["apple", "banana"], {"name":"john"}

const value=NaN
if (value) {
    console.log("This is a truthy value")
} else {
    console.log("This is a falsy value")
}

let str=""
if (str && str.length) { //if string is not there, it will show instead output
    console.log("This code will execute")
} else {
    console.log("This code will execute instead")
}

/* switch - multiway branching
//+,-,/,*,%
//switch(case exp) {
    case 1:break
    case 2:break
    .
    .
    .
    case n:break
    default;
}
// case label -string
*/

// Switch Case
let operation = "+";
function arithOperation(a, b, operation) {
    switch (operation) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            if (b !== 0) {
                console.log(a / b);
            } else {
                console.log("Cannot divide by zero");}
            break;
        case '%':
            console.log(a % b);
            break;
        default:
            console.log("Invalid operation");
    }
}
let a = 10;
let b = 20;
arithOperation(a, b, "%");

// Nested Switch
let fruit = "mango";
let color = "yellow";
let description;
switch (fruit) {
  case "mango":
    switch (color) {
      case "yellow":
        description = "Yellow Mango";
        break;
      case "green":
        description = "Green Mango";
        break;
      default:
        description = "Unknown Mango Color";
    }
    break;
}
console.log(description);