const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema({
  company: { type: String, required: true },
  url: {
    type: String,
  },
  hint: { type: String },
});

module.exports = mongoose.model("Logo", logoSchema);
