const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  type: { type: String, enum: ["buy", "sell"], required: true },
  user_id: { type: Number, required: true },
  symbol: { type: String, required: true },
  shares: { type: Number, required: true, min: 1, max: 100 },
  price: { type: Number, required: true },
  timestamp: { type: Number, required: true },
});

module.exports = mongoose.model("Trade", tradeSchema);
