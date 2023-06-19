const orderServices = require("../services/orderServices");
const { response } = require("../middleware/response");

const allOrders = async (req, res) => {
  try {
    let resp = await orderServices.allOrders();

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response(error.message, {}, 500, res);
  }
};
const allTrades = async (req, res) => {
  try {
    let resp = await orderServices.allTrades();

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response(error.message, {}, 500, res);
  }
};
const orderById = async (req, res) => {
  try {
    let resp = await orderServices.orderById(req.params.order_id);

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response(error.message, {}, 500, res);
  }
};
const tradeById = async (req, res) => {
  try {
    let resp = await orderServices.tradeById(req.params.order_id);

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response(error.message, {}, 500, res);
  }
};
const placeOrder = async (req, res) => {
  try {
    let resp = await orderServices.placeOrder(req.body);
    // console.log("resp",resp);

    if (resp) {
      return response(resp.data.status, resp.data.data, 200, res);
    }
  } catch (error) {
    // console.log(error);
    return response(error.message, {}, 500, res);
  }
};

const modifyOrder = async (req, res) => {
  try {
    let resp = await orderServices.modifyOrder(
      req.params.variety,
      req.params.order_id,
      req.body
    );

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response(error.message, {}, 500, res);
  }
};
const deleteOrder = async (req, res) => {
  try {
    let resp = await orderServices.deleteOrder(
      req.params.variety,
      req.params.order_id
    );

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response(error.message, {}, 500, res);
  }
};

module.exports = {
  allOrders,
  allTrades,
  orderById,
  tradeById,
  placeOrder,
  modifyOrder,
  deleteOrder,
};
