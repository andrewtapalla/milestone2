const router = require("express").Router();
const db = require("../models/index");

//Show

router.get("/library", (req, res) => {
  db.Logo.find()
    .then((logos) => {
      res.render("library/logo", { logos });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

module.exports = router;
