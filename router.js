const express = require("express");
const controller = require("./controllers/controller");

const router = express.Router();
router.use(express.static("public"));

// Handling GET requests
router.get("/", controller.renderHomePage);

router.get("/about", controller.renderAboutPage);

router.get("/contact", controller.renderContactPage);

router.get("/login", controller.renderLoginPage);

router.get("/signup", controller.renderSignupPage);

// ----------
router.get("/searchResult", controller.renderSearchResult);
// ----------

router.get("/writeReview", controller.renderBookSearch);

router.get("/credits", controller.renderCreditsPage);

router.get("/sourceCode", controller.renderSourceCodePage);

router.get("/forgotPassword", controller.renderForgotPasswordPage);


// Handling POST requests
router.post("/login", controller.postLoginPage);

router.post("/signup", controller.postSignupPage);

router.post("/searchResult", controller.postSearchResult);

router.post("/compose", controller.postComposePage);

module.exports = router;