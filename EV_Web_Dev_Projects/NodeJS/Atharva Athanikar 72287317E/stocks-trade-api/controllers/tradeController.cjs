const Trade = require("../models/trade.cjs");

const createTrade = async (req, res) => {
  try {
    const { type, user_id, symbol, shares, price, timestamp } = req.body;
    if (shares < 1 || shares > 100) {
      return res.status(400).json({ message: "Shares value out of range" });
    }
    if (type !== "buy" && type !== "sell") {
      return res.status(400).json({ message: "Incorrect type provided" });
    }
    const trade = new Trade({ type, user_id, symbol, shares, price, timestamp });
    await trade.save();
    res.status(201).json(trade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTrades = async (req, res) => {
  try {
    const { type, user_id } = req.query;
    let filters = {};
    if (type) filters.type = type;
    if (user_id) filters.user_id = user_id;
    const trades = await Trade.find(filters);
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTradeById = async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (!trade) {
      return res.status(404).json({ message: "ID not found" });
    }
    res.status(200).json(trade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTrade, getAllTrades, getTradeById };