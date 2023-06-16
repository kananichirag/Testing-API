const express = require("express");
const historical = express.Router();
const historicalController = require("../controller/historicalController");

historical.get("/data/:instrument_token/:interval", historicalController.data); // Retrieve a list of all historicals visible in historical order book

module.exports = historical;
