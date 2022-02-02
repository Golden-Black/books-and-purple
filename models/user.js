const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Display = require('../models/Display');
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

// User account 
let userLikedArray = [];
let userPosts = [];

// Create schema for mongoDB database collections
const userSchema = new Schema ({
  email: String,
  username: {
    type: String,
    unique: true
  },
  password: String,
  userPosts: [{
    title: String,
    authors: String,
    imageLink: String,
    isbn: String,
    reviewTite: String,
    review: String,
    date: String,
    category: String
  }]
});

userSchema.plugin(passportLocalMongoose);

// create the collection: User
const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = mongoose.model('User', userSchema) ;