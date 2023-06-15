const { KitConnect } = require("kiteconnect");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });

const Kitconnect = new KitConnect({
  api_key: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  apiUrl: process.env.API_URL,
});

module.exports = Kitconnect;
