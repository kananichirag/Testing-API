const express = require('express');
const v1 = express.Router();
const UserController = require('../controller/userController')

v1.get('/',(req,res) => {
    res.send("Index Route is Working..!!")
})


v1.post('/login',UserController.Login)

module.exports = v1;