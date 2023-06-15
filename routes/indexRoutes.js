const express = require("express");
const v1 = express.Router();
const UserRoutes = require('./UserRoutes')
const WsRoutes = require('../routes/wsRoutes')
const PortfolioRoutes = require('../routes/portfolioRoutes')
const InstrumentRoutes = require('../routes/instrumentRoutes')

v1.get("/", (req, res) => {
  res.send("Index Route is Working..!!1234");
});


v1.use('/user',UserRoutes)
v1.use('/ws',WsRoutes)
v1.use('/portfolio',PortfolioRoutes)
v1.use('/instrument',InstrumentRoutes)

module.exports = v1;
