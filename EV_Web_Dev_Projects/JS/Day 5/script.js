console.log(false+"3"+5+4)  //false354
/*functions
Syntax- function <function-name> (arg1, arg2,...) {
    statements;
}
*/

function display(firstName) {
    console.log("This msg comes from a function");
    console.log("Welcome "+firstName)
    // alert("Welcome "+firstName) //alert box written as IP address--says
}
let msg=display("AA")
console.log(msg)

var sum=function add(a,b) {
    return a+b;
};
let res=sum(10,2)
console.log(res)

function triple(x) {
    return x+x+x
}
console.log(triple(8))
console.log(triple("hi"))
console.log(triple("ho ho ho "))

function even (x) {
    return x%2==0
}
console.log(even(-8))

// Program to check whether 1963 is a leap year or not
function divides (x,y) {
    return y%x===0
}
function isLeapYear (y) {
    //return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return divides(4,y) && !divides(100,y) || divides(400,y)
}
console.log(isLeapYear(1963));

// Return whether str.length > length
let str="JavaScript"
function isLongerThan(str, length) {
    return str.length>length
}
console.log(isLongerThan(str, 7))

// Program to convert a number to hexadecimal and octal
let num = 10;
function conversion(num) {
    console.log("Hexadecimal:", num.toString(16) + ", Octal:", num.toString(8));  
}
conversion(num);

// Program to count no.of words in a string
function noOfWords(str) {
    let count = 0;
    let inWord = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            count++;
        } 
    }
    return count+1;
}
console.log(noOfWords("Javascript is awesome"))

// Program to capitalise each word
function capitalise(str){
    let result = '', inWord = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += ' '; 
            inWord = false;
        } else {
            if (!inWord) {
                result += str[i].toUpperCase(); inWord = true;
            } else {
                result += str[i];
            }
        }
    }
    return result;
}
console.log(capitalise("Javascript is awesome"))