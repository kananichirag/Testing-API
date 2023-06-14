var KiteConnect = require("kiteconnect").KiteConnect;
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, './config/.env') })
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
            // console.log("Result 1--->",response);
            res({ data: response })
          })

        function init() {
          // Fetch equity margins.
          // You can have other api calls here.
          kc.getMargins()
            .then(function (response) {
              res({ EquityMargins: response, message: "Success..!!!" })
            })
        }
      } catch (error) {
        console.log(error);
        // rej({status:500,message:"Something Went Wrong..!!!"})
      }
    })
  }
}