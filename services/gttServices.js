var KiteConnect = require("kiteconnect").KiteConnect;
const path = require("path");
const axios = require("axios");
var KiteTicker = require("kiteconnect").KiteTicker;
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });

module.exports = {

  // Retrieve the list of all orders (open and executed) for the day

  allGtt: () => {
    return new Promise(async (res, rej) => {
      try {
        axios
          .get("https://api.kite.trade/gtt/triggers", {
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
  gttById: (id) => {
    return new Promise(async (res, rej) => {
      try {
        // axios
        //   .get("https://api.kite.trade/gtt/triggers", {
        //     headers: {
        //       "X-Kite-Version": "3",
        //       Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
        //     },
        //   })
        //   .then((response) => {
        //     res(response);
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        res(id)
        console.log(id);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },
  
// Place GTT

placeGtt: (data) => {
    return new Promise(async (res, rej) => {
      try {
        // axios
        //   .get("https://api.kite.trade/gtt/triggers", {
        //     headers: {
        //       "X-Kite-Version": "3",
        //       Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
        //     },
        //   })
        //   .then((response) => {
        //     res(response);
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        res(data)
        console.log(data);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },
//Modify an active GTT

modifyGtt: (id, data) => {
    return new Promise(async (res, rej) => {
      try {
        // axios
        //   .get("https://api.kite.trade/gtt/triggers", {
        //     headers: {
        //       "X-Kite-Version": "3",
        //       Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
        //     },
        //   })
        //   .then((response) => {
        //     res(response);
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        res(data)
        console.log(id);
        console.log(data);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },


//Delete an active GTT

deleteGtt: (id) => {
    return new Promise(async (res, rej) => {
      try {
        // axios
        //   .get("https://api.kite.trade/gtt/triggers", {
        //     headers: {
        //       "X-Kite-Version": "3",
        //       Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
        //     },
        //   })
        //   .then((response) => {
        //     res(response);
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        res(id)
        console.log(id);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

};
