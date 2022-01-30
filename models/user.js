const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/purpleDB");

let postsArray = [];
// postsArray.push(homeStartingContent);

// User account 
let userLikedArray = [];
let userPosts = [];

// Create schema for mongoDB database collections
const userSchema = {
  email: String,
  username: String,
  password: String,
  userPosts: [{
    title: String,
    image: String,
    review: String,
    date: String
  }]
};

// create the a collection: User
const User = new mongoose.model("User", userSchema);