//Express Config
const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

// Have Node serve the files for our built React app for deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("/api", (req, res) => {
  res.json({
    message: "Yellow world from server.js",
  });
});

//Controllers
const logoController = require("./client/src/controllers/logos");

app.use("/library", logoController);

//config for deploy
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

//Port Connections
app.listen(PORT, () => {
  console.log("yellow world on " + PORT);
});
