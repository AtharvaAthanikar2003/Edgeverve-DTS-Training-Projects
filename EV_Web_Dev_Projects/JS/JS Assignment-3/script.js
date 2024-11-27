// Function to calculate sum of array elements using arrow function
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
const nums = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(nums)); // Output: 15

// Function to return second max and second min from an array
function secondMaxMin(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b); // Remove duplicates and sort
    return {
        secondMin: sorted.length > 1 ? sorted[1] : null,
        secondMax: sorted.length > 1 ? sorted[sorted.length - 2] : null,
    };
}
const nums2 = [10, 5, 3, 8, 8, 7, 2];
const secondMaxMinResult = secondMaxMin(nums2);
console.log("Second Min:", secondMaxMinResult.secondMin); // Output: 3
console.log("Second Max:", secondMaxMinResult.secondMax); // Output: 8

// Function to reverse an array
function reverseArray(arr) {
    return arr.reverse();
}
const nums3 = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArray([...nums3])); // Output: [5, 4, 3, 2, 1]

// Function to update book year given title and new year
function updateBookYear(books, title, newYear) {
    const book = books.find((b) => b.title === title);
    if (book) {
        book.year = newYear;
        return book;
    }
    return null;
}
const books = [
    { title: "Book A", year: 2000 },
    { title: "Book B", year: 2010 },
    { title: "Book C", year: 2015 },
];
const updatedBook = updateBookYear(books, "Book B", 2023);
console.log("Updated Book:", updatedBook); // Output: { title: "Book B", year: 2023 }
console.log("Books after update:", books);

// Function to filter books published after a given year
function filterBooksByYear(books, year) {
    return books.filter((book) => book.year > year);
}
const filteredBooks = filterBooksByYear(books, 2010);
console.log("Books published after 2010:", filteredBooks);
// Output: [ { title: "Book C", year: 2015 }, { title: "Book B", year: 2023 } ]