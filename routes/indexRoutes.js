const express = require('express');
const v1 = express.Router();
const UserController = require('../controller/LoginController')
const LoginRoutes = require('../routes/loginRoutes')
const WsRoutes = require('../routes/wsRoutes')
const PortfolioRoutes = require('../routes/portfolioRoutes')
const InstrumentRoutes = require('../routes/instrumentRoutes')

v1.get('/',(req,res) => {
    res.send("Index Route is Working..!!")
})


v1.use('/user',LoginRoutes)
v1.use('/ws',WsRoutes)
v1.use('/portfolio',PortfolioRoutes)
v1.use('/instrument',InstrumentRoutes)

module.exports = v1;