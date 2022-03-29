const router = require("express").Router();
const db = require("../models");

//Show

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

module.exports = router;
