var KiteConnect = require("kiteconnect").KiteConnect;
const path = require("path");
const axios = require("axios");
var KiteTicker = require("kiteconnect").KiteTicker;
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });

module.exports = {
  login: () => {
    return new Promise(async (res, rej) => {
      try {
        var kc = new KiteConnect({
          api_key: process.env.API_KEY,
        });

        kc.generateSession(process.env.REQUEST_TOKEN, process.env.API_SECRET)
          .then(function (response) {
            init();
            res({ data: response });
          })
          .catch(function (err) {
            console.log(err);
          });

        function init() {
          kc.getMargins()
            .then(function (response) {
              res({ result: response, message: "Success...!!!!" });
            })
            .catch(function (err) {
              console.log("Error");
            });
        }
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  FundsAndMargin: () => {
    return new Promise(async (res, rej) => {
      try {
        axios
          .get("https://api.kite.trade/user/margins", {
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
  userProfile: () => {
    return new Promise(async (res, rej) => {
      try {
        axios
          .get("https://api.kite.trade/user/profile", {
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
};
