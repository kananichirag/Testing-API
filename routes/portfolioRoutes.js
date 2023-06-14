const  express = require('express')
const PS = express.Router()
const PsController = require('../controller/PSController')

PS.get('/holding',PsController.Holding)


module.exports = PS;