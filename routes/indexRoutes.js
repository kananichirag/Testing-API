const express = require('express');
const v1 = express.Router();
const UserController = require('../controller/LoginController')
const LoginRoutes = require('../routes/loginRoutes')
const WsRoutes = require('../routes/wsRoutes')

v1.get('/',(req,res) => {
    res.send("Index Route is Working..!!")
})


v1.use('/user',LoginRoutes)
v1.use('/ws',WsRoutes)

module.exports = v1;