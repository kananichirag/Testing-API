const express = require('express')
const LoginRoute = express.Router();
const LoginController = require('../controller/LoginController')

LoginRoute.post('/login',LoginController.Login)

module.exports = LoginRoute