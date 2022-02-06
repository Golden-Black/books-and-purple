const mongoose = require('mongoose');

// Posts Displayed
let postsArray = [];
// postsArray.push(homeStartingContent);
const submittedPostSchema = new mongoose.Schema({
    title: String,
    authors: String,
    imageLink: String,
    isbn: String,
    reviewTitle: {
      type: String,
      require: true
    },
    review: {
      type: String,
      require: true
    },
    date: String,
    category: String,
    // user: String
})

// create the collection: SubmittedPost
const SubmittedPost = new mongoose.model("SubmittedPost", submittedPostSchema);

const item0 = new SubmittedPost({
  title: "DUNE",
  authors: "Frank Herbert",
  imageLink: "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F70e181a5-bcfd-44dc-adee-e82f5359195d_4032x3024.jpeg",
  isbn: "9780441013593",
  reviewTitle: "It's everything you've heard it is and more.",
  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi...",
  date: "Jan 31 2021",
  category: "Fiction"
});



const item1 = new SubmittedPost({
  title: "Shoe Dog",
  authors: "Phil Knight",
  imageLink: "https://media.gatesnotes.com/-/media/Images/Books/Shoe-Dog/shoe-dog_2016_800px.ashx",
  isbn: "9781501135927",
  reviewTitle: "Knight is the most interesting person I never knew I wanted to meet...",
  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris...",
  date: "Jan 31 2021",
  category: "Business"
});


const item2 = new SubmittedPost({
  title: "The Hard Thing about Hard Things",
  authors: "Ben Horowitz",
  imageLink: "http://frogcapital.com/wp-content/uploads/IMG_8334-1024x924.jpg",
  isbn: "9780062273215",
  reviewTitle: "Solid advice for start-ups and other leaders",
  review: ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta...",
  date: "Jan 31 2021",
  category: "Business"
});

item2.save();

const item3 = new SubmittedPost({
  title: "Greenlights",
  authors: "Matthew McConaughey",
  imageLink: "https://images-na.ssl-images-amazon.com/images/I/61-Pt+1b+xL.jpg",
  isbn: "9780593235478",
  reviewTitle: "Man what a ride!",
  review: ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta...",
  date: "Jan 31 2021",
  category: "Biography"
});

item3.save();

module.exports = mongoose.model('SubmittedPost', submittedPostSchema);

// const postSchema = new mongoose.Schema({
//   name: String,
//   submitedPosts: [sumittedPostSchema]
// })
// module.exports = postSchema;

// // create the collection: Posts
// const Post = new mongoose.model("Post", postSchema);