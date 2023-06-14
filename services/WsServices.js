var KiteConnect = require("kiteconnect").KiteConnect;
const path = require('path')
var KiteTicker = require("kiteconnect").KiteTicker;
require('dotenv').config({ path: path.join(__dirname, './config/.env') })



module.exports = {
    ws: () => {
        return new Promise(async (res, rej) => {
          try {
           
            var ticker = new KiteTicker({
              api_key: process.env.API_KEY,
              access_token: process.env.ACC_TOKEN
          });
          
          // set autoreconnect with 10 maximum reconnections and 5 second interval
          ticker.autoReconnect(true, 10, 5)
          ticker.connect();
          ticker.on("ticks", onTicks);
          ticker.on("connect", subscribe);
          
          ticker.on("noreconnect", function() {
              console.log("noreconnect");
          });
          
          ticker.on("reconnecting", function(reconnect_interval, reconnections) {
              console.log("Reconnecting: attempt - ", reconnections, " innterval - ", reconnect_interval);
          });
          
          function onTicks(ticks) {
              res({data:ticks})
          }
          
          function subscribe() {
              var items = [738561];
              ticker.subscribe(items);
              ticker.setMode(ticker.modeFull, items);
          }
          } catch (error) {
            console.log(error);
            rej({ status: 500, message: "Something Went Wrong..!!!" })
          }
        })
      },



      ws2: () => {
        return new Promise(async (res, rej) => {
          try {
           
            

    
          } catch (error) {
            console.log(error);
            rej({ status: 500, message: "Something Went Wrong..!!!" })
          }
        })
      }



    
}