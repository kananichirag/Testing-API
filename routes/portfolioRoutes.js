const  express = require('express')
const PS = express.Router()
const PsController = require('../controller/PSController')

PS.get('/holding',PsController.Holding)
PS.get('/auctionlist',PsController.HoldingAuctionList)
PS.get('/position',PsController.Position)


module.exports = PS;