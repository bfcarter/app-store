var express = require("express");
var apiRouter = require("./api/");

var router = express.Router();

router.get("/", function(req, res) {
    res.send("/");
});

router.use("/api", apiRouter);

module.exports = router;