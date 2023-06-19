var KiteConnect = require("kiteconnect").KiteConnect;
const path = require("path");
const axios = require("axios");
var KiteTicker = require("kiteconnect").KiteTicker;
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });
let qs = require("qs");

module.exports = {
  // Retrieve the list of all orders (open and executed) for the day

  allOrders: () => {
    return new Promise(async (res, rej) => {
      try {
        axios
          .get("https://api.kite.trade/orders", {
            headers: {
              "X-Kite-Version": "3",
              Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
            },
          })
          .then((response) => {
            res(response);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  // Retrieve the list of all executed trades for the day

  allTrades: () => {
    return new Promise(async (res, rej) => {
      try {
        axios
          .get("https://api.kite.trade/trades", {
            headers: {
              "X-Kite-Version": "3",
              Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
            },
          })
          .then((response) => {
            res(response);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  // Retrieve the history of a given order

  orderById: (id) => {
    return new Promise(async (res, rej) => {
      try {
        axios
          .get(`https://api.kite.trade/orders/${id}`, {
            headers: {
              "X-Kite-Version": "3",
              Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
            },
          })
          .then((response) => {
            res(response);
            // console.log(id);
          })
          .catch((error) => {
            console.error(error);
          });
        // res(id);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  // Trade By ID

  tradeById: (id) => {
    return new Promise(async (res, rej) => {
      try {
        axios
          .get(`https://api.kite.trade/orders/${id}/trades`, {
            headers: {
              "X-Kite-Version": "3",
              Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
            },
          })
          .then((response) => {
            res(response);
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
        // res(id);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  // Buy And Sell Order

  placeOrder: (details) => {
    return new Promise(async (res, rej) => {
      try {
        const formData = qs.stringify(details);
        // console.log('details---', details)
        const response = await axios.post(
          "https://api.kite.trade/orders/regular",
          formData,
          {
            headers: {
              "X-Kite-Version": "3",
              Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
            },
          }
        );
        if (response) {
          res({ status: 200, data: response.data });
        } else {
          rej({ status: 404, message: "something went wrong!!" });
        }
      } catch (error) {
        //  console.log("error->>>>>>>>>>.",error.response.data.message);
        rej({ status: 500, message: error.response.data.message });
      }
    });
  },


  // Modify an open or pending order
  modifyOrder: (variety, order_id, data) => {
    return new Promise(async (res, rej) => {
      try {
        // axios
        //   .get("https://api.kite.trade/orders/regular", {
        //     headers: {
        //       "X-Kite-Version": "3",
        //       Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
        //     },
        //   })
        //   .then((response) => {
        //     res(response);
        // console.log(variety);
        // console.log(order_id);
        // console.log(data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        res(variety);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  // Delete an open or pending order
  deleteOrder: (variety, order_id) => {
    return new Promise(async (res, rej) => {
      try {
        // axios
        //   .get("https://api.kite.trade/orders/regular", {
        //     headers: {
        //       "X-Kite-Version": "3",
        //       Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
        //     },
        //   })
        //   .then((response) => {
        //     res(response);
        console.log(variety);
        console.log(order_id);
        // console.log(data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        res(variety);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },
};
