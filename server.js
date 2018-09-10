// Dependencies Connecting 
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();

//Port 
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(PORT, function () {
    console.log('Running on PORT ' + PORT);
});

