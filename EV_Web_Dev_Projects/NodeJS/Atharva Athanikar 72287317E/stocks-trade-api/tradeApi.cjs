const express = require("express");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const mongoUrl = "mongodb://127.0.0.1:27017/Capstone-Project_DTS"; 
const dbName = "stocksTrade";
let db, tradesCollection;

MongoClient.connect(mongoUrl, { useUnifiedTopology: true })
    .then((client) => {
        db = client.db(dbName);
        tradesCollection = db.collection("trades");
        console.log(`Connected to database: ${dbName}`);
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    });

const trades = [];
app.post("/trades", (req, res) => {
    const { type, user_id, symbol, shares, price, timestamp } = req.body;
    if (!type || !user_id || !symbol || !shares || !price || !timestamp) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    if (type !== "buy" && type !== "sell") {
        return res.status(400).json({ message: "Incorrect type provided" });
    }
    if (shares < 1 || shares > 100) {
        return res.status(400).json({ message: "Shares value out of range" });
    }
    const newTrade = {
        id: uuidv4(),
        type,
        user_id,
        symbol,
        shares,
        price,
        timestamp,
    };
    trades.push(newTrade);
    res.status(201).json(newTrade);
});

app.get("/trades", (req, res) => {
    const { type, user_id } = req.query;
    let filteredTrades = trades;
    if (type) {
        filteredTrades = filteredTrades.filter((trade) => trade.type === type);
    }
    if (user_id) {
        filteredTrades = filteredTrades.filter((trade) => trade.user_id === parseInt(user_id));
    }
    res.status(200).json(filteredTrades);
});

app.delete('/trades/:id', (req, res) => {
  res.status(405).json({ message: "Method Not Allowed" });
});

app.patch('/trades/:id', (req, res) => {
  res.status(405).json({ message: "Method Not Allowed" });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});