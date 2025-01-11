const { Router } = require("express");
const router = Router();
const { createTrade, getAllTrades, getTradeById } = require("../controllers/tradeController.cjs");
const authMiddleware = require("../middlewares/authMiddleware.cjs");

// POST /trades - Create a new trade
router.post("/trades", authMiddleware, createTrade);

// GET /trades - Get all trades
router.get("/trades", authMiddleware, getAllTrades);

// GET /trades/:id - Get a trade by id
router.get("/trades/:id", authMiddleware, getTradeById);

// Catch-all for disallowed methods on /trades/:id
router.delete("/trades/:id", (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
});

router.patch("/trades/:id", (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
});

module.exports = router;
