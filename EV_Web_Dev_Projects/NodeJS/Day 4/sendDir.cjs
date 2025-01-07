const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path');
const fs = require('fs');

app.use(express.json())
app.use('/Day 4',express.static(path.join(__dirname, 'public')));


app.get('/imgs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'node-js.webp'));
});


app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server is running on port ${PORT}`);
    else
        console.log("Error: " + error);
});