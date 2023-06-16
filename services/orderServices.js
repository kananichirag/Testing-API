var KiteConnect = require("kiteconnect").KiteConnect;
const path = require("path");
const axios = require("axios");
var KiteTicker = require("kiteconnect").KiteTicker;
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });
let qs = require('qs')

// var api_key = process.env.API_KEY,
//   secret = process.env.API_SECRET,
//   request_token = process.env.REQUEST_TOKEN,
//   access_token = process.env.ACC_TOKEN;

// var options = {
//   api_key: api_key,
//   debug: false,
// };

// let kc = new KiteConnect(options);

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

  //  Order Place

  // placeOrder: (details) => {
  //   return new Promise(async (res, rej) => {
  //     try {
  //       axios
  //         .post("https://api.kite.trade/orders/regular", {
  //           headers: {
  //             "X-Kite-Version": "3",
  //             Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
  //           },
  //           data:{
  //             "tradingsymbol": details.tradingsymbol ,
  //             "exchange":details.exchange ,
  //             "transaction_type":details.transaction_type ,
  //             "order_type":details.order_type ,
  //             "quantity":details.quantity ,
  //             "product":details.product ,
  //             "validity":details.validity
  //           }
  //         })
  //         .then((response) => {
  //           res(response);
  //       // console.log(data);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //       // res(data);
  //     } catch (error) {
  //       console.log(error);
  //       rej({ status: 500, message: "Something Went Wrong..!!!" });
  //     }
  //   });
  // },
  placeOrder: (details) => {
    return new Promise(async (res, rej) => {
      try {
        const formData = qs.stringify(details);
        // console.log('details---', formData)
        const response = await axios.post(
          "https://api.kite.trade/orders/regular",formData,
        //   {
        //     "tradingsymbol":"SECURCRED" ,
        //     "exchange":"NSE" ,
        //     "transaction_type":"BUY" ,
        //     "order_type":"MARKET" ,
        //     "quantity":"1" ,
        //     "product":"CNC" ,
        //     "validity":"DAY"
        // },
          {
            headers: {
              "X-Kite-Version": "3",
              Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`
            }
          }
        );
        // res(details);
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
        console.log(variety);
        console.log(order_id);
        console.log(data);
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
