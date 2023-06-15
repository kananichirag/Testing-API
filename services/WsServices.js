var KiteConnect = require("kiteconnect").KiteConnect;
const path = require("path");
const BinaryParser = require('binary-parser').Parser;
const WebSocket = require('ws');
const buffer = require('node:buffer')
var KiteTicker = require("kiteconnect").KiteTicker;
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });



module.exports = {
  ws: () => {
    return new Promise(async (res, rej) => {
      try {
        var ticker = new KiteTicker({
          api_key: process.env.API_KEY,
          access_token: process.env.ACC_TOKEN,
        });

        // set autoreconnect with 10 maximum reconnections and 5 second interval
        ticker.autoReconnect(true, 10, 5);
        ticker.connect();
        ticker.on("ticks", onTicks);
        ticker.on("connect", subscribe);

        ticker.on("noreconnect", function () {
          console.log("noreconnect");
        });

        ticker.on("reconnecting", function (reconnect_interval, reconnections) {
          console.log(
            "Reconnecting: attempt - ",
            reconnections,
            " innterval - ",
            reconnect_interval
          );
        });

        function onTicks(ticks) {
          res({ data: ticks });
        }

        function subscribe() {
          var items = [738561];
          ticker.subscribe(items);
          ticker.setMode(ticker.modeFull, items);
        }
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  ws2: () => {
    return new Promise(async (res, rej) => {
      try {
        const ws = new WebSocket(`wss://ws.kite.trade?api_key=${process.env.API_KEY}&access_token=${process.env.ACC_TOKEN}`);

        ws.on('open', function () {
          console.log('Connected to WebSocket');
          message = { a: "mode", v: ["full", 408065] };
          ws.send(JSON.stringify(message));
          // We Send Data Here
        });

          // ws.on('message', function (data) {
          //   const buffer = Buffer.from(data);
          //   const parsedData = parseWebSocketMessage(buffer);
            
          //   console.log("Data ==>", parsedData);
          // });
      


          // ws.on('message', function (data) {
          //   try {
          //     const bufferData = Buffer.from(data);
          //     const originalData = bufferData.toString('utf-8');
          //     const jsonData = JSON.parse(originalData);
          
          //     console.log("Data:", jsonData);
          //   } catch (error) {
          //     console.error("Error parsing JSON:", error);
          //     console.log("Received data:", data);
          //   }
          // });




        ws.on('message', function (data) {
          let MSG = data.toString()
          const buffer = data;
          console.log("datra",data);
          const bufferData = Buffer.from([data]); 
          const normalData = bufferData.toString('utf-8');  
          console.log("Data ==>",normalData)

        });



        ws.on('close', function () {
          console.log('Disconnected from WebSocket');
        });

        ws.on('error', function (error) {
          console.error('WebSocket error:', error);
        });


      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },
};
