const mongoose = require("mongoose");

const LogoSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  hint: {
    type: String,
  },
});

const LogoModel = mongoose.model("Logo", LogoSchema);
module.exports = LogoModel
