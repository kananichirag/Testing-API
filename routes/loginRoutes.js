const express = require('express')
const LoginRoute = express.Router();
const LoginController = require('../controller/LoginController')

LoginRoute.post('/login',LoginController.Login)
LoginRoute.get('/fund',LoginController.Funds)

module.exports = LoginRoute