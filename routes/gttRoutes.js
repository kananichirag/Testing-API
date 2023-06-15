const express = require("express");
const gtt = express.Router();
const gttController = require("../controller/gttController");

gtt.get("/allGtt", gttController.allGtt); // Retrieve a list of all GTTs visible in GTT order book
gtt.get("/gttById/:id", gttController.gttById); // Retrieve an individual trigger By ID

gtt.post("/placeGtt", gttController.placeGtt); // Place a GTT
gtt.put("/modifyGtt/:id", gttController.modifyGtt); // Modify an active GTT
gtt.delete("/deleteGtt/:id", gttController.deleteGtt); // Delete an active GTT


module.exports = gtt;
