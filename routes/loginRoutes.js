const express = require("express");
const LoginRoute = express.Router();
const LoginController = require("../controller/LoginController");

LoginRoute.post("/login", LoginController.Login);
LoginRoute.post("/fund", LoginController.Funds);
LoginRoute.get("/userProfile", LoginController.userProfile);

module.exports = LoginRoute;
