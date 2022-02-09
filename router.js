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

router.get("/account", controller.renderAccountPage);

router.get("/searchBook", controller.renderSearchBook);

router.get("/searchResult", controller.renderSearchResult);

router.get("/compose", controller.renderComposePage);

router.get("/credits", controller.renderCreditsPage);

router.get("/sourceCode", controller.renderSourceCodePage);

router.get("/forgotPassword", controller.renderForgotPasswordPage);

router.get("/:postId", controller.renderReviewsPage);


// Handling POST requests
router.post("/login", controller.postLoginPage);

router.post("/signup", controller.postSignupPage);

router.post("/searchBook", controller.postSearchBook);

router.post("/searchResult", controller.postSearchResult);

router.post("/compose", controller.postComposePage);

router.post("/success", controller.postSuccessPage);

module.exports = router;