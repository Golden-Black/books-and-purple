//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const router = require("./router");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// lodash
// Load the full build.
var _ = require('lodash');
const {
  forEach
} = require("lodash");

app.use("/", router);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});