const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });

module.exports = {
  data: (instrument_token, interval) => {
    return new Promise(async (res, rej) => {
      try {
        // const name = Name.toUpperCase();
        // axios.get(`https://api.kite.trade/quote/ltp?i=${name}`, {
        axios
          .get(
            `https://api.kite.trade/instruments/historical/${instrument_token}/${interval}?from=2023-06-15+09:15:00&to=2023-06-16+09:20:00`,
            {
              headers: {
                "X-Kite-Version": "3",
                Authorization: `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`,
              },
            }
          )
          .then((response) => {
            res(response);
            // console.log(response.data);
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
