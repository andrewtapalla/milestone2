const router = require("express").Router();
const db = require("../models");

//Museum
router.get("/", (req, res) => {
  db.Logo.find()
    .then((logos) => {
      console.log(logos);
      res.json(logos);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

//Game
router.get("/game", (req, res) => {
  db.Adeez.aggregate([{ $sample: { size: 1 } }])
    .then((gameLogo) => {
      console.log(gameLogo);
      res.json(gameLogo);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

//Museum
router.get("/museum", (req, res) => {
  db.Ninedeez.find()
    .then((museum) => {
      console.log(museum);
      res.json(museum);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

module.exports = router;
