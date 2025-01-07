/* 
Error handling and error object
try, catch, throw, finally

Categories - compile time, run time
compile time - console.log("Hello World" -> missing closing parenthesis
run time - occurs during execution of code

let result=addNumbers(1,'abc')

logical errors -
eg- 
function discount(price, qty) {
    return price*qty   -- this is not discount formaula, hence will give wrong answer
} 

Error object- 
new Error(message)
custom error types - 
name: ReferenceError, TypeError
message: description of error
stack: displays stack trace
*/

try {
    let result = dummyFunction()
}
catch (error) {
    console.error("Error name: ",error.name)
    console.error("Error message: ",error.message)
    console.error("Error stack: ",error.stack)
}

/*
O/P given - 

script.js:29 Error name:  ReferenceError
(anonymous) @ script.js:29Understand this errorAI
script.js:30 Error message:  dummyFunction is not defined
(anonymous) @ script.js:30Understand this errorAI
script.js:31 Error stack:  ReferenceError: dummyFunction is not defined
    at http://127.0.0.1:5500/Day%2013/script.js:26:18
*/

/*
Different types of errors-
ReferenceError, TypeError, SyntaxError, InternalError, URIError
URL - https://www.google.com
URI - urn:isbn::0111221144
EvalError - eval()
RangeError
*/

function DivideByZero() {
    throw new Error("Division by zero")
}
try {
    let result=DivideByZero()
} 
catch (error) {
    console.error(10/0)     // Infinity
    console.error(-10/0)    // -Infinity
    console.error(0/0)      // NaN
}

////
function checkAge (age) {
    if (age<18) {
        throw new Error("Not eligible for voting")
    }
    console.log("Access granted")
}
try {
    checkAge(17)
}
catch (error) {
    console.log("Error:", error.message)
}

////
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name="Validation Error"
        this.age="Validation Error"
    }
}
function validateUser (user) {
    // check for missing age or name
    if (!user.name || !user.age) {
        throw new ValidationError('Missing required properties: name or age');
    }
    console.log("User is valid")
}
try {
    validateUser({age:21})
}
catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation Error:", error.message)
    }
    else {
        console.error("General Error", error.message)
    }
    console.log(error.message)
}

////
try {
    let json= '{"name":"Jack", "age":21}'
    let user=JSON.parse(json)
    if (!user.email) {
        throw new SyntaxError("Field name email not found in json")
    }
}
catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Caught", error.message)
    } 
    else {
        console.error("Unexpected error occured", error.message)
    }  
}
// O/P - Caught Field name email not found in json as email is not given here

////
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        throw new Error("Invalid email format");
    } else {
        console.log(`Valid Email: ${email}`);
    }
}
let email;  
try {
    email = "abcgmail.com";  // Invalid email (missing @)
    validateEmail(email);
} catch (error) {
    console.log(`Error for email: ${email} -> ${error.message}`);
}

try {
    email = "abc@gmail.com";  // Valid email
    validateEmail(email);
} catch (error) {
    console.log(`Error for email: ${email} -> ${error.message}`);
}