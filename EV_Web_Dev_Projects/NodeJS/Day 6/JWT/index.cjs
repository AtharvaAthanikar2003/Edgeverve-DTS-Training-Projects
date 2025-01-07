const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./model.cjs");

const MONGO_URL = "mongodb://127.0.0.1:27017/NodeTrainingDB";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

mongoose
    .connect(MONGO_URL)
    .then((result) => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

//Handle Signup
app.post("/signup", async (req, res, next) => {
    const { name, email, password } = req.body;
    const newUser = User({
        name,
        email,
        password,
    });
    try {
        await newUser.save();
    } catch {
        const error = new Error("Error! Something went wrong");
        return next(error);
    }
    let token;
    try {
        token = jwt.sign(
            { userId: newUser, email: newUser.email },
            "secertkey",
            {
                expiresIn: "5h",
            }
        );
    } catch (err) {
        const error = new Error("Error! Something not well");
        return next(error);
    }
    res.status(201).json({
        success: "User registration success",
        data: {
            userId: newUser.userId,
            name: newUser.name,
            token: token,
        },
    });
});

// Handle login
app.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return res
            .status(500)
            .json({ message: "Error finding user", error: err.message });
    }

    if (!existingUser || existingUser.password !== password) {
        return res.status(401).json({ message: "Wrong credentials" });
    }

    let token;
    try {
        token = jwt.sign(
            { userID: existingUser.id, email: existingUser.email },
            "secretkey",
            { expiresIn: "1h" } 
        );
    } catch (err) {
        return res
            .status(500)
            .json({ message: "Error generating token", error: err.message });
    }

    res.status(200).json({
        message: "Login successful",
        user: existingUser,
        token,
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});