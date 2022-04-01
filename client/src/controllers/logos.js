const router = require("express").Router();
const db = require("../models");

//Game
router.get("/", (req, res) => {
  db.Logo.aggregate([{ $sample: { size: 1 } }])
    .then(gameLogo => {
      console.log(gameLogo);
      res.json(gameLogo);
    })
    .catch(err => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

//Show
router.get("/museum", (req, res) => {
  db.Logo.find()
    .then(logos => {
      console.log(logos);
      res.json(logos);
    })
    .catch(err => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

module.exports = router;
