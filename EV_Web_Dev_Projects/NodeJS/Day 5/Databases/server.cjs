const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/library";
const Book = require("./model.cjs");

mongoose
    .connect(MONGO_URL)
    .then((result) => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

const libBooks = [
    {
        _id: "1",
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981,
    },
    {
        _id: "2",
        title: "The White Tiger",
        author: "Aravind Adiga",
        year: 2008,
    },
    {
        _id: "3",
        title: "The God of Small Things",
        author: "Arundhati Roy",
        year: 1997,
    },
    {
        _id: "4",
        title: "A Fine Balance",
        author: "Rohinton Mistry",
        year: 1995,
    },
    {
        _id: "5",
        title: "The Guide",
        author: "R.K. Narayan",
        year: 1958,
    },
    {
        _id: "6",
        title: "The Inheritance of Loss",
        author: "Kiran Desai",
        year: 2006,
    },
    {
        _id: "7",
        title: "Train to Pakistan",
        author: "Khushwant Singh",
        year: 1956,
    },
    {
        _id: "8",
        title: "The Lowland",
        author: "Jhumpa Lahiri",
        year: 2013,
    },
    {
        _id: "9",
        title: "Shantaram",
        author: "Gregory David Roberts",
        year: 2003,
    },
    {
        _id: "10",
        title: "White Tiger",
        author: "Aravind Adiga",
        year: 2008,
    },
];

// Book.insertMany(libBooks)
//     .then((result) => {
//         console.log("Books inserted!");
//     })
//     .catch((err) => {
//         console.log("Error inserting book\n" + err);
//     });

app.get("/books", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch {
        console.error("Error fetching books");
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.use(express.json()); // This is necessary to parse JSON data

// Fetch single books assignment

//Inserting book to the DB via Node
app.post("/insert", (req, res) => {
    // const { title, author, year } = req.body;
    // if (!title || !author || !year) {
    //     return res
    //         .status(400)
    //         .json({ error: "Title, author, and year are required" });
    // }
    // const newBook = new Book({
    //     title,
    //     author,
    //     year,
    // });
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
    });
    newBook
        .save()
        .then((result) => {
            console.log("Book inserted!");
            res.status(201).json({
                message: "Book inserted successfully",
                book_id: result._id,
            });
        })
        .catch((err) => {
            console.log("Error inserting book\n" + err);
            res.status(500).json({
                error: "Error inserting book",
                details: err,
            });
        });
});

//route to update the existing book

app.post("/update", (req, res) => {
    const { _id, title, author, year } = req.body;
    if (!_id || !title || !author || !year) {
        return res.status(400).json({ error: "ID, title, author, and year are required" });
    }
    Book.findByIdAndUpdate(_id, { title, author, year }, { new: true })
        .then((updatedBook) => {
            if (!updatedBook) {
                return res.status(404).json({ error: "Book not found" });
            }
            res.json({ message: "Book Updated Successfully", book: updatedBook });
        })
        .catch((err) => {
            console.error("Error in updating book:", err);
            res.status(500).json({ error: "Error updating book", details: err });
        });
});

// Route to delete
// app.post("/delete", async (req, res) => {
//     await Book.findByIdAndDelete(req.body._id)
//         .then(() => {
//             res.send("Book Deleted Successfully");
//         })
//         .catch((err) => {
//             console.log("error in deleteing");
//         });
// });

app.delete("/delete", async (req, res) => {
    try {
        if (!req.body._id) {
            return res.status(400).send("Book ID is required");
        }
        const result = await Book.findByIdAndDelete(req.body._id);
        if (!result) {
            return res.status(404).send("Book not found");
        }
        res.send("Book Deleted Successfully");
    } catch (err) {
        console.error("Error in deleting book:", err);
        res.status(500).send("Error deleting book");
    }
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Server started running at port ${PORT}`);
});