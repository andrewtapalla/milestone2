const mongoose = require("mongoose");

const otzSchema = new mongoose.Schema({
  company: { type: String, required: true },
  url: {
    type: String,
  },
  hint: { type: String },
});

module.exports = mongoose.model("Otz", otzSchema, "otz");
