require('dotenv').config();
const axios = require('axios');
const { result } = require('lodash');
const date = require(__dirname + "/date.js");

// const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitleSearch}&key=${process.env.APIKEY}`;

exports.renderHomePage = (req, res) =>{
    const day = date.getDate();

    res.render("index", {
        title: "Home - Book & Purple",
        todayEjs: day,
        viewsCount: 1000
    });
};


exports.renderAboutPage = (req, res) => {
    res.render("about", {
        title: "About - Book & Purple"
    });
};

exports.renderContactPage = (req, res) => {
    res.render("contact", {
        title: "Contact - Book & Purple"
    });
};

exports.renderLoginPage = (req, res) =>{
    res.render("login", {
        title: "Login - Book & Purple"
    });
};

exports.renderSignupPage = (req, res) => {
    res.render("signup");
};

exports.renderBookSearch = (req, res) => {
    res.render("searchBook", {
        title: "Book Search - Books & Purple"
    });
};

// ------------------------------
exports.renderSearchResult = (req, res) => {
    res.render("searchResult", {
        title: "Result - Books & Purple",
        apiResult: "result.title"
    });
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

exports.postLoginPage = (req, res) => {
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
};

exports.postSignupPage = (req, res) => {
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
};

exports.postSearchResult = (req, res) => {

    const bookTitleSearch = req.body.bookTitle;
    bookTitleSearch.replace(' ', '+');
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitleSearch}&key=${process.env.APIKEY}`;

    axios.get(url).then(response => {
        let result = response.data.items;
        res.render("searchResult", {
            title: "Result - Books & Purple",
            apiResult: result
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

};

exports.postComposePage = (req, res) => {

    let options = {
        title: req.body.newTitle,
        post: req.body.newPost
    }

    postsArray.push(options);
    console.log(postsArray);
    res.redirect("/");
};

