require("dotenv").config();
const express = require("express");
const app = express();

const PORT = 3001;

app.get("/api", (req, res) => {
  res.json({
    message: "Yellow world from server.js",
  });
});

app.listen(PORT, () => {
  console.log("yellow world on " + PORT);
});
