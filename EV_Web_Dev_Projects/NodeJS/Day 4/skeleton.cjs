const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());
app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server is running on port ${PORT}`);
    else
        console.log("Error: " + error);
});