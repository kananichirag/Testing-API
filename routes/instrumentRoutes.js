const express = require('express')
const InstrumentRoutes = express.Router();
const InstrumenController = require('../controller/instrumentController')


InstrumentRoutes.get('/list',InstrumenController.InstrumentList)
InstrumentRoutes.get('/findby',InstrumenController.findbyInstrument)
InstrumentRoutes.get('/ohlc',InstrumenController.Ohlc)
InstrumentRoutes.get('/ltp',InstrumenController.ltp)

module.exports = InstrumentRoutes;