// Find largest number
let a = 10;
let b = 20;
let c = 28;
let largest = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(`The largest number is: ${largest}`);

// Find whether the given number is in range or not
let start = 11;
let end = 30;
let key = 15;
let found = false;
for (let i = start; i <= end; i++) {
    if (i === key) {
        found = true;
        break;
    }
}
if (found) {
    console.log(`${key} is found in the range.`);
} else {
    console.log(`${key} is not found in the range.`);
}

// Arithmetic operations on numbers
let d=54;
let e=35;
let f=46;
let g=31;
let operation="+";
if (operation==="+") {
    console.log(d+e);
} else if (operation==="-") {
    console.log(d-e);
} else if (operation==="*") {
    console.log(d*e);
} else if (operation==="/") {
    console.log(d/e);
} else if (operation==="%") {
    console.log(d%e);
} else {
    console.log("Invalid Input");
}

// Find no.of given days in a month
let month = 2; 
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let days = daysInMonth[month - 1];
console.log(`Number of days in month ${month}: ${days}`);