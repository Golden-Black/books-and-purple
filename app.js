//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const router = require("./router");
const app = express();
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require('./models/User');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));

app.use(session({
  secret: process.env.SESSION_SECRET || "Salvation lies within.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect(process.env.mongoURL, {useNewUrlParser: true});
mongoose.connect("mongodb://localhost:27017/purpleDB", {useNewUrlParser: true});

// // lodash
// // Load the full build.
// var _ = require('lodash');
// const {
//   forEach
// } = require("lodash");

app.use("/", router);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});