const mongoose = require("mongoose");

const adeezSchema = new mongoose.Schema({
  company: { type: String, required: true },
  url: {
    type: String,
  },
  hint: { type: String },
});


module.exports = mongoose.model("Adeez", adeezSchema, "adeez");

