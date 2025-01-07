const mongoose= require('mongoose');
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
});
const Book = mongoose.model("LibraryBooks", bookSchema);
module.exports = Book;