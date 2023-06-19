var KiteConnect = require("kiteconnect").KiteConnect;
const path = require("path");
var KiteTicker = require("kiteconnect").KiteTicker;
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });
const WebSocket = require("ws");

const apiKey = process.env.API_KEY;
const accessToken = process.env.ACC_TOKEN;

module.exports = {
  ws: () => {
    return new Promise(async (res, rej) => {
      try {
        var ticker = new KiteTicker({
          api_key: process.env.API_KEY,
          access_token: process.env.ACC_TOKEN,
        });

        // set autoreconnect with 10 maximum reconnections and 5 second interval
        ticker.autoReconnect(true, 10, 0.1);
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
          // setInterval(function() {res({ data: ticks })}, 1000);
          console.log(ticks);
        }

        function subscribe() {
          // var items = ['TATAMOTORS'];
          var items = [128120324];
          ticker.subscribe(items);
          ticker.setMode(ticker.modeFull, items);
        }
      } catch (error) {
        console.log(error);
        rej({ status: 500, message: "Something Went Wrong..!!!" });
      }
    });
  },

  //   ws2: () => {
  //     return new Promise(async (res, rej) => {
  //       try {
  //         const ticker = new KiteTicker({
  //           api_key: process.env.API_KEY,
  //           access_token: process.env.ACC_TOKEN,
  //         });

  //         ticker.connect();

  //         // WebSocket event handlers and further processing
  //         ticker.on("connect", () => {
  //           console.log("WebSocket connection opened");
  //           // Subscribe to the desired instruments or perform other actions
  //           ticker.subscribe(["NSE:INFY"]);
  //           ticker.setMode(ticker.modeFull, ["NSE:INFY"]);
  //         });

  //         ticker.on("ticks", (ticks) => {
  //           console.log("Received ticks:", ticks);
  //           // Process the incoming WebSocket ticks
  //         });

  //         ticker.on("close", () => {
  //           console.log("WebSocket connection closed");
  //           // Handle the WebSocket connection closure
  //         });

  //         // Additional event handlers for errors, etc.
  //       } catch (error) {
  //         console.log(error);
  //         rej({ status: 500, message: "Something Went Wrong..!!!" });
  //       }
  //     });
  //   },
  //   test: () => {
  //     return new Promise(async (res, rej) => {
  //       try {
  //         // const websocketURL = `wss://ws.kite.trade?api_key=${apiKey}&access_token=${accessToken}`;

  //         // const ws = new WebSocket(websocketURL);

  //         // ws.on("open", () => {
  //         //   console.log("WebSocket connection established");

  //         //   // Send a message
  //         //   const message = {
  //         //     type: "subscribe",
  //         //     instrument_tokens: ["NSE:INFY", "NSE:TCS"],
  //         //   };

  //         //   ws.send(JSON.stringify(message));
  //         // });

  //         // ws.on("message", (data) => {
  //         //   const message = JSON.parse(data);
  //         //   console.log("Received message:", message);
  //         // });

  //         // ws.on("error", (error) => {
  //         //   console.error("WebSocket error:", error);
  //         // });

  //         // ws.on("close", () => {
  //         //   console.log("WebSocket connection closed");
  //         // });
  //         const wsEndpoint = `wss://ws.kite.trade?api_key=${apiKey}&access_token=${accessToken}`;

  //         // API credentials
  //         // const apiKey = "YOUR_API_KEY";
  //         // const accessToken = "YOUR_ACCESS_TOKEN";

  //         const ws = new WebSocket(wsEndpoint);

  //         // Event handler: WebSocket connection established
  //         ws.on("open", () => {
  //           console.log("WebSocket connection established");

  //           // Authenticate
  //           const authData = {
  //             api_key: apiKey,
  //             access_token: accessToken,
  //           };
  //           ws.send(JSON.stringify(authData));

  //           // Set INFY (408065) to 'full' mode to receive market depth as well.
  //           const infyMessage = {
  //             a: "mode",
  //             v: ["full", [408065]],
  //           };
  //           ws.send(JSON.stringify(infyMessage));

  //           // Set TATAMOTORS (884737) to 'ltp' to only receive the LTP.
  //           const tataMotorsMessage = {
  //             a: "mode",
  //             v: ["ltp", [884737]],
  //           };
  //           ws.send(JSON.stringify(tataMotorsMessage));
  //         });

  //         // Event handler: WebSocket data received
  //         ws.on("message", (data) => {
  //           const message = JSON.parse(data);
  //           console.log("Received data:", message);
  //           // Process the received data as needed
  //         });

  //         // Event handler: WebSocket connection closed
  //         ws.on("close", () => {
  //           console.log("WebSocket connection closed");
  //         });
  //       } catch (error) {
  //         console.log(error);
  //         rej({ status: 500, message: "Something Went Wrong..!!!" });
  //       }
  //     });
  //   },
};
