const express = require("express");
const xss = require("xss");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
            <input type="text" name="userInput" value="<script>alert('XSS')</script>" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
    const userInput = req.body.userInput;
    const sanitizedInput = xss(userInput); // Sanitize input using xss library
    res.send(`You entered: ${sanitizedInput}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



//prevention will take u to direct submission page not pop up so that it would avoide hackers