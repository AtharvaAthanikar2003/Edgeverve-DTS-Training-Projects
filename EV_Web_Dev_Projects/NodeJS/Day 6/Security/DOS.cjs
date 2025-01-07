const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

// Define the rate limit rule
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1, // Limit each IP to 1 request per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes"
});

// Apply the rate limit to all requests
app.use(limiter);

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
