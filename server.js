//Exoress Config
const express = require("express");

const app = express();

//Mongo Config
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongo connected DB at:", process.env.MONGO_URI);
  }
);

//Controllers
const logoController = require("./client/src/models/logos");
app.use("/logos", logoController);

app.get("/api", (req, res) => {
  res.json({
    message: "Yellow world from server.js",
  });
});

app.listen(process.env.PORT, () => {
  console.log("yellow world on " + process.env.PORT);
});
