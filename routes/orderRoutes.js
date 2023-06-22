const express = require("express");
const orders = express.Router();
const ordersController = require("../controller/orderController");

orders.get("/allOrders", ordersController.allOrders);                   // Retrieve the list of all orders (open and executed) for the day
orders.get("/allTrades", ordersController.allTrades);                   // Retrieve the list of all executed trades for the day
orders.get("/orderById/:order_id", ordersController.orderById);          // Retrieve the history of a given order
orders.get("/tradeById/:order_id", ordersController.tradeById);          // Retrieve the trades generated by an order


orders.post("/placeOrder", ordersController.placeOrder);                     // Place an order of a particular variety
orders.put("/modifyOrder/:variety/:order_id", ordersController.modifyOrder); // Modify an open or pending order
orders.delete("/deleteOrder/:variety/:order_id", ordersController.deleteOrder); // Delete an open or pending order

module.exports = orders;