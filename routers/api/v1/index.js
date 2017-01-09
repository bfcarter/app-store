var express = require("express");
var getRandomText = require("../../../controllers/getRandomText.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.send("/");
});

router.post("/url", function(req, res) {
    var url = req.body.url;
    res.send({
        message: "Your shortened url for " + url + " is " + "/" + getRandomText(9)
    });
});

module.exports = router;