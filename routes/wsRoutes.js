const express = require('express')
const WS = express.Router();
const wsController = require('../controller/WsController')

WS.post('/ticks',wsController.WS)
WS.post('/ticks2',wsController.WS2)

module.exports = WS;