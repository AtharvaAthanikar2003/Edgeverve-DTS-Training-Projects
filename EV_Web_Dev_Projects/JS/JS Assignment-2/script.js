// Problem Statement 1: Declare variables using let, const, var and demonstrate it's usage
let x=10;
const y=20;
var z=30;
console.log(x,y,z);
console.log("*****")

// Problem Statement 2: Accept any type of data as input and checks it's datatype using typeof, type coercion (add numbers) 
function checkType (input){
    if (typeof input==="number"){
        console.log("It's a "+typeof input+" type and after adding, the result is "+(input+10));
    } else {
        console.log(typeof input);
    }
}
checkType(15); 
checkType("Hello");
console.log("*****")

// Problem Statement 3: Accepts a day of week (1-7) and prints corresponding weekdays
function getWeekday(day){
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(days[day-1]||"Invalid day");
}
getWeekday(3);
getWeekday(8);
console.log("*****")

// Problem Statement 4: Find sum of even and odd numbers
function sumEvenOdd(arr){
    let evenSum=0,oddSum=0;
    arr.forEach(num=>{
        if (num%2===0){
            evenSum+=num;
        } else {
            oddSum+=num;
        }
    });
    console.log({evenSum,oddSum});
}
sumEvenOdd([1, 2, 3, 4, 5, 6]);
console.log("*****")

// Problem Statement 5: Arrow functions that accepts a sentence and counts no.of words
const countWords=sentence=>sentence.split(" ").length;
const sentencecount = "JavaScript is a dynamic programming language.";
console.log("Number of words in the sentence:", countWords(sentencecount));
console.log("*****")

// Problem Statement 6: Arrow function that takes an array of numbers and returns count of +ve and -ve no.s
const countPosNeg=arr=>{
    let pos=0,neg=0;
    arr.forEach(num=>{
        if (num>0){
            pos++;
        } else if(num<0){
            neg++;
        }
    });
    return{positive:pos,negative:neg};
};
const testArray = [-3, 4, -2, 7, 0, -8];
const result = countPosNeg(testArray);
console.log("Count of positive numbers:", result.positive);
console.log("Count of negative numbers:", result.negative);
console.log("*****")

// Problem Statement 7: Book Class with Getter and Setter and Inheritance with Ebook
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
    success(){
        console.log(`Downloaded eBook of ${this.title} of size ${this.filesize} MB successfully`)
    }
}
const b1 = new Book(1, 'Wings of Feather', 'Dr APJ Abdul Kalam', 300);
b1.info();
const ebook1 = new Ebook(2, 'Learning JavaScript', 'John Doe', 250, 5);
ebook1.info();
ebook1.download();
ebook1.success();