require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
      message: 'Yellow world from server.js'
  });
});

app.listen(process.env.PORT, () => {
  console.log("yellow world on " + process.env.PORT);
});
