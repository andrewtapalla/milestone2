require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
      message: 'Yellow world'
  });
});

app.listen(process.env.PORT, () => {
  console.log("yellow world on " + process.env.PORT);
});
