const mongoose = require("mongoose");

let user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", user);
module.exports = User;