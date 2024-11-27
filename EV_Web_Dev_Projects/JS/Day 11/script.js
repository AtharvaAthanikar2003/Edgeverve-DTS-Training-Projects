// Problem 1: Person and Employee Classes with Private Fields, Methods, and Inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}. I am ${this.age} years old.`);
    }
}
class Employee extends Person {
    #salary;
    #Pwd;
    constructor(name, age, position, salary, password) {
        super(name, age);
        this.position = position;
        this.#salary = salary;
        this.#Pwd = password;
    }
    #validatePwd(inputPwd) {
        return this.#Pwd === inputPwd;
    }
    checkPwd(inputPwd) {
        if (this.#validatePwd(inputPwd)) {
            console.log('Password correct');
        } else {
            console.log('Incorrect password');
        }
    }
    introduce() {
        console.log(`Hi, I am ${this.name}. I am ${this.age} years old. I am a ${this.position}, and I earn $${this.#salary}.`);
    }
}

// Problem 2: Static Method in MathUtility Class
class MathUtility {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) return 'Cannot divide by zero';
        return a / b;
    }
}

// Problem 3: Circle Class with Getter and Setter for Area and Radius
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get area() {
        return Math.PI * this._radius * this._radius;
    }
    set radius(newRadius) {
        if (newRadius <= 0) {
            console.log('Radius must be positive');
            return;
        }
        this._radius = newRadius;
    }
    get radius() {
        return this._radius;
    }
}

// Problem 4: Book Class with Getter and Setter and Inheritance with Ebook
class Book {
    #title;
    #author;
    constructor(bookid, title, author, pages) {
        this.bookid = bookid;
        this.#title = title;
        this.#author = author;
        this.pages = pages;
    }
    get title() {
        return this.#title;
    }
    set title(newTitle) {
        this.#title = newTitle;
    }
    get author() {
        return this.#author;
    }
    set author(newAuthor) {
        this.#author = newAuthor;
    }
    info() {
        console.log(`BookID: ${this.bookid}, Title: ${this.#title}, Author: ${this.#author}, Pages: ${this.pages}`);
    }
}
class Ebook extends Book {
    constructor(bookid, title, author, pages, filesize) {
        super(bookid, title, author, pages);
        this.filesize = filesize;
    }
    download() {
        console.log(`Downloading the eBook: ${this.title} of size ${this.filesize} MB...`);
    }
    info() {
        super.info();
        console.log(`Filesize: ${this.filesize} MB`);
    }
}
const b1 = new Book(1, 'Wings of Feather', 'Dr APJ Abdul Kalam', 300);
b1.info();
const ebook1 = new Ebook(2, 'Learning JavaScript', 'John Doe', 250, 5);
ebook1.info();
ebook1.download();

// Test Cases
const emp = new Employee('John', 22, 'UI Developer', 25000, 'Pass@123');
emp.introduce();
emp.checkPwd('Pass@123');
emp.checkPwd('WrongPass');

console.log(MathUtility.add(4, 5));
console.log(MathUtility.subtract(10, 3));
console.log(MathUtility.multiply(4, 5));
console.log(MathUtility.divide(10, 2));
console.log(MathUtility.divide(10, 0));

const circle = new Circle(5);
console.log(circle.area);
circle.radius = 10;
console.log(circle.area);
console.log(circle.radius);