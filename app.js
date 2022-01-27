//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

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
const res = require("express/lib/response");

var postsArray = [];
// postsArray.push(homeStartingContent);

// Create schema for mongoDB database collections
const userSchema = {
  email: String,
  password: String
};
// create the model object to add to collections
const User = new mongoose.model("User", userSchema);


app.get("/", function (req, res) {
  const day = date.getDate();

  res.render("index", {
    title: "Home - Book & Purple",
    todayEjs: day
  });
})

app.get("/about", function (req, res) {
  res.render("about", {
    title: "About - Book & Purple"
  });
})

app.get("/contact", function (req, res) {
  res.render("contact");
})

app.get("/login", function (req, res) {
  res.render("login");
})

app.get("/signup", function (req, res) {
  res.render("signup");
})

app.get("/writeReview", function (req, res) {
  res.render("writeReview");
})

app.get("/credits", function(req, res){
  res.render("credits");
})

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    email: username
  }, function (err, userFound) {
    if (err) {
      console.log(err);
      alert("Sorry, an error has occurd! Please try again later.");
    } else {
      if (userFound) {
        if (userFound.password === password) {
          res.render("/");
        } else {
          alert("Sorry, incorrect password! Please try again.");
        }
      } else {
        console.log("User Not Found.");
        alert("User Not Found.");
      }
    }
  })
})

app.post("/signup", function (req, res) {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  })

  User.findOne({
    email: username
  }, function (err, userFound) {
    if (err) {
      console.log(err);
      alert("Sorry, an error has occurd! Please try again later.");
    } else {
      if (userFound) {
        alert("Email registered. Please login.");
      } else {
        newUser.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            res.render("/");
          }
        })
      }
    }
  })
})

app.post("/compose", function (req, res) {

  let options = {
    title: req.body.newTitle,
    post: req.body.newPost
  }

  postsArray.push(options);
  console.log(postsArray);
  res.redirect("/");
})


app.listen(3000, function () {
  console.log("Server started on port 3000");
});