const router = require("express").Router();
const db = require("../models");

//Museum
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
      console.log(gameLogo[0].company);
      res.json(gameLogo);
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
      console.log(adeez);
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
      console.log(nindee);
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
      console.log(otz);
      res.json(otz);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

module.exports = router;
