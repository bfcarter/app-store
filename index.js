var express = require("express");
var bodyParser = require("body-parser");
var mainRouter = require("./routers/");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(mainRouter);

app.listen(3000, function() {
    console.log("Application is listening on port 3000");
});
