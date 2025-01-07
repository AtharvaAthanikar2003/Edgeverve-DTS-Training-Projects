const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const users1 = [
    { id: 1, name: "John", phone: "2222", city: "London" },
    { id: 2, name: "Alice", phone: "3333", city: "New York" },
    { id: 3, name: "Bob", phone: "4444", city: "Paris" },
    { id: 4, name: "Charlie", phone: "5555", city: "Berlin" },
    { id: 5, name: "Eve", phone: "6666", city: "Tokyo" },
    { id: 6, name: "Grace", phone: "7777", city: "Sydney" },
    { id: 7, name: "David", phone: "8888", city: "Rome" },
    { id: 8, name: "Sophia", phone: "9999", city: "Madrid" },
    { id: 9, name: "Lucas", phone: "1010", city: "Toronto" },
    { id: 10, name: "Olivia", phone: "1212", city: "Los Angeles" },
];

app.use(bodyParser.json());
const getAllUsers = (req, res) => {
    res.json(users1);
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = users1.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

const getUserByCity = (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ message: "City query parameter is required" });
    }
    const usersInCity = users1.filter(u => u.city.toLowerCase() === city.toLowerCase());
    if (usersInCity.length > 0) {
        res.json(usersInCity);
    } else {
        res.status(404).json({ message: "No users found in the specified city" });
    }
};

const getCities = (req, res) => {
    const cities = [...new Set(users1.map(u => u.city))];
    res.json(cities);
};

app.get("/", (req, res) => res.send("Welcome users"));
app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.get("/users/:cities", getUserByCity);
app.get("/cities", getCities);
app.listen(port, (error) => {
    if (!error)
        console.log(`Server is running on http://localhost:${port}`);
    else
        console.log(`Error: ${error}`);
});   