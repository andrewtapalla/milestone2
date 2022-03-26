const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Logo.find()
    .then((logos) => {
      res.send({
        message: "Router /get db",
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

module.exports = router;
