const express = require("express");
const v1 = express.Router();
const LoginRoutes = require('../routes/loginRoutes')
const WsRoutes = require('../routes/wsRoutes')
const PortfolioRoutes = require('../routes/portfolioRoutes')
const InstrumentRoutes = require('../routes/instrumentRoutes')
const ordersRoutes = require('../routes/orderRoutes')
const gttRoutes = require('../routes/gttRoutes')

v1.get("/", (req, res) => {
  res.send("Index Route is Working..!!1234");
});


v1.use('/user',LoginRoutes)
v1.use('/ws',WsRoutes)
v1.use('/portfolio',PortfolioRoutes)
v1.use('/instrument',InstrumentRoutes)
v1.use('/orders',ordersRoutes)
v1.use('/gtt',gttRoutes)

module.exports = v1;
