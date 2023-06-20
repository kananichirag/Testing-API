var KiteConnect = require("kiteconnect").KiteConnect;
const path = require("path");
const axios = require("axios");
var KiteTicker = require("kiteconnect").KiteTicker;
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });
const qs = require("qs");
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
        const response = await axios.get(
          `https://api.kite.trade/gtt/triggers/${id}`,
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
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  // Place GTT

  placeGtt: (data) => {
    return new Promise(async (res, rej) => {
      try {
        const formData = qs.stringify(data);

        const response = await axios.post(
          "https://api.kite.trade/gtt/triggers",
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
        console.log(formData);
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
        const updateData = qs.stringify(data);

        const response = await axios.put(
          `https://api.kite.trade/gtt/triggers/${id}`,
          updateData,
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
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  //Delete an active GTT

  deleteGtt: (id) => {
    return new Promise(async (res, rej) => {
      try {
        const response = await axios.delete(
          "https://api.kite.trade/gtt/triggers/" + id,
          {
            headers: {
              "X-Kite-Version": "3",
              Authorization:
                "token " + process.env.API_KEY + ":" + process.env.ACC_TOKEN,
            },
          }
        );
        if (response) {
          res({ status: 200, data: response.data });
        } else {
          rej({ status: 404, message: "something went wrong!!" });
        }
        res(id);
        console.log(id);
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },
};
