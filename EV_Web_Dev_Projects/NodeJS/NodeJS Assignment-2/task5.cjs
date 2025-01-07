// Task 5: File upload and download using Multer
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const upload = multer({ dest: 'uploads/' });

// Upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

// Download endpoint
app.get('/download/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.params.filename);
    res.download(filePath);
});

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});