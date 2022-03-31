require("dotenv").config();
//Exoress Config
const express = require("express");

const app = express();

//Controllers
const logoController = require("./client/src/controllers/logos");
app.use("/library", logoController);

app.get("/api", (req, res) => {
  
});

//Port Connections
app.listen(process.env.PORT, () => {
  console.log("yellow world on " + process.env.PORT);
});
