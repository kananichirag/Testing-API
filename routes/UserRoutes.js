const express = require("express");
const UserRoutes = express.Router();
const LoginController = require("../controller/LoginController");

UserRoutes.post("/login", LoginController.Login);
UserRoutes.get("/fund", LoginController.Funds);

module.exports = UserRoutes;
