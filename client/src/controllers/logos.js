const router = require("express").Router();
const LogoModel = require("../models/logos");

//Show

router.get("/logos", (req, res) => {
  LogoModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ message: "error404" });
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

module.exports = router;
