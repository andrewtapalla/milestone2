const router = require("express").Router();
const db = require("../models");

//Museum
router.get("/", (req, res) => {
  db.Logo.find()
    .then((logos) => {
      res.json(logos);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

//Game
router.get("/game", (req, res) => {
  db.GameScheme.aggregate([{ $sample: { size: 1 } }])
    .then((game) => {
      res.json(game);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

//Museum
router.get("/museum/80", (req, res) => {
  db.Adeez.find()
    .then((adeez) => {
      res.json(adeez);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

router.get("/museum/90", (req, res) => {
  db.Ninedeez.find()
    .then((nindee) => {
      res.json(nindee);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});
router.get("/museum/00", (req, res) => {
  db.Otz.find()
    .then((otz) => {
      res.json(otz);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

module.exports = router;
