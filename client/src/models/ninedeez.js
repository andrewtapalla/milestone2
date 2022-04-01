const mongoose = require("mongoose");

const ninedeezSchema = new mongoose.Schema({
  company: { type: String, uppercase: true },
  url: {
    type: String,
  },
  hint: { type: String },
});

module.exports = mongoose.model("Ninedeez", ninedeezSchema, "ninedeez");
