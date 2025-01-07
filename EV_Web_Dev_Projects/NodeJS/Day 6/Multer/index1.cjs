const multer = require('multer');
const path = require('path');
const express = require('express');

const app = express();

// Configure storage setup using multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Directory to store uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname)); // Append timestamp and file extension
    }
});

// File size limit
const maxSize = 1 * 1000 * 1000; // 1MB

// File filter to allow only specific file types
const fileFilter = function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/; // Allowed file extensions
    const mimetype = filetypes.test(file.mimetype); // Check MIME type
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check file extension

    if (mimetype && extname) {
        return cb(null, true); // Accept file
    }
    cb("Error: File does not support the allowed types!"); // Reject file
};

// Configure multer
const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: fileFilter
}).single("mypic"); // Accept only one file with the field name 'mypic'

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the directory for view templates

// Routes
app.get("/", function (req, res) {
    res.render("signup"); // Render the signup.ejs file
});

app.post("/uploadProfilePicture", function (req, res, next) {
    // Use Multer middleware to handle file upload
    upload(req, res, function (err) {
        if (err) {
            // Handle errors during file upload
            res.send(err);
        } else {
            // Success message after a successful upload
            res.send("Success, Image uploaded!");
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
