/*
Javascript objects are variables that contains multiple data values
Values are nothing but properties
It has key-value pair
{
    "key":value, ...
}
*/

var course = {
    "name": "Javascript",
    "start": "6th Nov 2024", 
    "end": "13th Nov 2024"
}
console.log(course)
console.log(course.name)
console.log(course["name"])
course.end="20th Nov 2024"
console.log(course["end"])

// Objects can have functions
var person = {
    firstName: "Jack",
    lastName: "Smith",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person)
console.log(person.fullName())