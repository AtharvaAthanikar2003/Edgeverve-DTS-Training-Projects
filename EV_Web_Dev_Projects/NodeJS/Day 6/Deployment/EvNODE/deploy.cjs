const express = require('express')
const app = express()
var test;
app.all('/', (req, res) => res.send("Shirish"));
app.listen(3000, () => console.log('Example app listening on port 3000!'))