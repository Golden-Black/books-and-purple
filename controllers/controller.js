const date = require(__dirname + "/date.js");

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

exports.renderWriteReviewPage = (req, res) => {
    res.render("writeReview", {
        title: "Write a Review - Books & Purple"
    });
};

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

exports.postComposePage = (req, res) => {

    let options = {
        title: req.body.newTitle,
        post: req.body.newPost
    }

    postsArray.push(options);
    console.log(postsArray);
    res.redirect("/");
};

