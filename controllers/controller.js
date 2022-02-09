require('dotenv').config();
const axios = require('axios');
const User = require('../models/User');
const Display = require('../models/Display');
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const {
    result
} = require('lodash');
const {
    post
} = require('../router');
const {
    json
} = require('express/lib/response');
const { addListener } = require('../models/Display');


// =================== For GET Requests =================
exports.renderHomePage = (req, res) => {

    Display.find(function (err, books) { // find everything
        if (err) {
            console.log(err);
        } else {
            if (req.isAuthenticated()) {
                console.log(req.body);
                res.render("index", {
                    title: "Home - Book & Purple",
                    postings: books,
                    viewsCount: 1000,
                    login: "Logout",
                    signup: req.user.username
                })
            } else {
                res.render("index", {
                    title: "Home - Book & Purple",
                    postings: books,
                    viewsCount: 1000,
                    login: "Login",
                    signup: "Sign Up"
                });
            }
        }
    });
};


exports.renderAboutPage = (req, res) => {
    if (req.isAuthenticated()) {
        res.render("compose", {
            title: "About - Books & Purple",
            login: "Logout",
            signup: req.user.username,
            date: date.getDate()
        });
    } else {
        res.render("compose", {
            title: "About - Books & Purple",
            login: "Login",
            signup: "Sign Up",
            date: date.getDate()
        });
    }
};

exports.renderContactPage = (req, res) => {
    if (req.isAuthenticated()) {
        res.render("contact", {
            title: "Contact - Books & Purple",
            login: "Logout",
            signup: req.user.username,
            date: day
        });
    } else {
        res.render("contact", {
            title: "Contact - Books & Purple",
            login: "Login",
            signup: "Sign Up",
            date: day
        });
    }
};

exports.renderAccountPage = (req, res) => {
    if (req.isAuthenticated()) {
        res.render("account", {
            title: "Your account - Books & Purple",
            login: "Logout",
            signup: req.user.username
        });
    } else {
        res.redirect("/login");
    }
}

exports.renderLoginPage = (req, res) => {

    if (req.isAuthenticated()) {
        // Logout if authenticated
        req.logout();
        res.redirect("/");
    } else {
        res.render("login", {
            title: "Login - Book & Purple"
        });
    }

};

exports.renderSignupPage = (req, res) => {
    if (req.isAuthenticated()) {
        res.render("account", {
            title: "Your account - Books & Purple",
            login: "Logout",
            signup: req.user.username
        });
    } else {
        res.render("signup");
    }
};

exports.renderSearchBook = (req, res) => {
    if (req.isAuthenticated()) {
        res.render("searchBook", {
            title: "Book Search - Books & Purple",
            login: "Logout",
            signup: req.user.username
        });
    } else {
        res.redirect('/login');
    }
};

exports.renderComposePage = (req, res) => {
    if (req.isAuthenticated()) {
        res.render("compose", {
            title: "Compose - Books & Purple",
            login: "Logout",
            signup: req.user.username,
            date: today
        });
    } else {
        res.redirect("/login");
    }
}
// ------------------------------
exports.renderSearchResult = (req, res) => {
    if (req.isAuthenticated()) {
        res.render("searchResult", {
            title: "Result - Books & Purple",
            apiResult: "result.title",
            login: "Logout",
            signup: req.user.username
        });
    } else {
        res.redirect('/login');
    }
} // --------------------------------

exports.renderCreditsPage = (req, res) => {
    res.render("credits", {
        title: "Credits - Book & Purple"
    });
};

exports.renderSourceCodePage = (req, res) => {
    res.redirect("https://github.com/Golden-Black/books-and-purple");
};

exports.renderForgotPasswordPage = (req, res) => {
    res.render("forgotPassword");
};

exports.renderReviewsPage = (req, res) => {
    let postID = req.params.postId;
    var bookTitle, authors, imagelink, description, isbnType, isbn, category="";

    Display.findById(postID, function (error, reviewFound){
        if(error){
            console.log(error);
            // alert("Sorry! An error has occurred. You will be redirected to the home page.");
            res.redirect("/");
        }else{
            if(reviewFound){
                bookTitle = reviewFound.title;
                authors = reviewFound.authors;
                imageLink = reviewFound.imageLink;
                description = reviewFound.description;
                isbnType = reviewFound.isbnType;
                isbn = reviewFound.isbn;
                category = reviewFound.category

                if (req.isAuthenticated()){
                    res.render("reviewsPage", {
                        title: "Your account - Books & Purple",
                        login: "Logout",
                        signup: req.user.username,
                        bookTitleEjs: bookTitle,
                        authorsEjs: authors,
                        imageLinkEjs: imageLink,
                        descriptionEjs: description,
                        type: isbnType,
                        identifier: isbn,
                        categoryEjs: category,
                        usersPosts: reviewFound.userPost
                    });
                }else{
                    res.render("reviewsPage", {
                        title: "Your account - Books & Purple",
                        login: "Login",
                        signup: "Sign Up",
                        bookTitleEjs: bookTitle,
                        authorsEjs: authors,
                        imageLinkEjs: imageLink,
                        descriptionEjs: description,
                        type: isbnType,
                        identifier: isbn,
                        categoryEjs: category,
                        usersPosts: reviewFound.userPost
                    });
                }

            }else{
                // alter("Sorry! The article can no longer be found. You will be redirected to the home page");
                res.redirect("/");
            }
        }
    })


};

// =================== For POST Requests =================
exports.postLoginPage = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/");
            })
        }
    })
};

exports.postSignupPage = (req, res) => {
    User.register({
            username: req.body.username,
            email: req.body.email
        },
        req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
                res.redirect("/signup");
            } else {
                passport.authenticate("local")(req, res, function () {
                    Display.find(function (err, books) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(req.body.username);
                            res.render("index", {
                                title: "Home - Book & Purple",
                                postings: books,
                                viewsCount: 1000,
                                login: "Logout",
                                signup: req.body.username
                            });
                        }
                    });
                })
            }
        })



    // const newUser = new User({
    //     email: req.body.username,
    //     password: req.body.password
    // })

    // User.findOne({
    //     email: username
    // }, function (err, userFound) {
    //     if (err) {
    //         console.log(err);
    //         alert("Sorry, an error has occurd! Please try again later.");
    //     } else {
    //         if (userFound) {
    //             alert("Email registered. Please login.");
    //         } else {
    //             newUser.save(function (err) {
    //                 if (err) {
    //                     console.log(err);
    //                 } else {
    //                     res.render("/");
    //                 }
    //             })
    //         }
    //     }
    // })
};

exports.postSearchBook = (req, res) => {
    if (req.isAuthenticated()) {
        const bookTitleSearch = req.body.bookTitle;
        bookTitleSearch.replace(' ', '+');
        const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitleSearch}&key=${process.env.APIKEY}`;

        axios.get(url).then(response => {
            let result = response.data.items;
            console.log(result[0].volumeInfo.categories);
            res.render("searchResult", {
                title: "Result - Books & Purple",
                apiResult: result,
                login: "Logout",
                signup: req.user.username
            });
            // let col1, col2, col3, col4 = [];
            // for(let i = 0; i < result.length; i++){
            //     if(i % 4 === 0){
            //         var one = result[i].volumeInfo;
            //         col1.push(one);
            //     }
            //     if(i % 4 === 1){
            //         var two = result[i].volumeInfo;
            //         col2.push(two);
            //     }
            //     if(i % 4 === 2){
            //         var three = result[i].volumeInfo;
            //         col3.push(three);
            //     }
            //     if(i % 4 === 3){
            //         var four = result[i].volumeInfo;
            //         col4.push(four);
            //     }
            // }
            // console.log(result);
            // console.log(result[0].volumeInfo.imageLinks.thumbnail);
        }).catch(err => {
            console.log(err);
        });
    } else {
        res.redirect("/login");
    }

};

exports.postSearchResult = (req, res) => {
    if (req.isAuthenticated()) {
        // console.log(req.body.apiResult);
        res.render("compose", {
            title: "About - Books & Purple",
            login: "Logout",
            signup: req.user.username,
            date: date.getDate(),
            title: req.body.apiTitle,
            authors: req.body.apiAuthors,
            imageLink: req.body.apiImageLink,
            description: req.body.apiDescription,
            type: req.body.apiISBNType,
            identifier: req.body.apiISBN,
            category: req.body.apiCategories
        });
    } else {
        res.render("login");
    }
};

exports.postComposePage = (req, res) => {
    if (req.isAuthenticated()) {
        User.findById(req.user.id, function (error, userFound) {
            if (error) {
                console.log(error);
                alert("Sorry but an error occurred. Please try again later.")
            } else {
                if (userFound) {
                    // update user post
                    let newUserPost = {
                        title: req.body.title,
                        authors: req.body.authors,
                        imageLink: req.body.imageLink,
                        description: req.body.description,
                        isbnType: req.body.isbnType,
                        isbn: req.body.isbn,
                        category: req.body.category,
                        reviewTitle: req.body.reviewTitle,
                        review: req.body.bookReview,
                        date: date.getDate()
                    }
                    console.log(newUserPost);
                    userFound.userPosts.push(newUserPost);

                    userFound.save(function () {
                        console.log("User Post saved!");
                    });
                    
                    // store the post in the submitted posts
                    Display.findOne({isbn: req.body.isbn}, function(error, existing){
                        const userPostNew = {
                            reviewTitle: req.body.reviewTitle,
                            review: req.body.bookReview,
                            date: newUserPost.date,
                            category: req.body.category,
                            username: req.user.username,
                            userId: req.user.id
                        }


                        if (!existing) {
                            // if book not found
                            const newPost = new Display({
                                title: req.body.title,
                                authors: req.body.authors,
                                imageLink: req.body.imageLink,
                                isbnType: req.body.isbnType,
                                isbn: req.body.isbn,
                                description: req.body.description,
                                category: req.body.category,
                                userPost: userPostNew
                            })
                            newPost.save();
                        } else {
                            // if the book is found
                            existing.userPost.push(userPostNew);
                            existing.save();
                        }
                    })

                    res.redirect("/");
                }       
            }
        })
    } else {
        res.render("login");
    }
};


exports.postSuccessPage = async (req, res) => {
    const today = require(__dirname + "/date.js");
    const day = today.getDate();
    const reviewTitle = req.body.reviewTitle;
    const review = req.body.review;
    const category = req.body.category;

}