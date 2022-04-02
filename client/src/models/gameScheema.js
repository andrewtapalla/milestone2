const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  company: { type: String, uppercase: true },
  url: {
    type: String,
  },
  hint: { type: String },
});

module.exports = mongoose.model("GameScheme", gameSchema, "game");

