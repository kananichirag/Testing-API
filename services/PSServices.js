var KiteConnect = require("kiteconnect").KiteConnect;
const path = require('path')
const axios = require('axios');
var KiteTicker = require("kiteconnect").KiteTicker;
require('dotenv').config({ path: path.join(__dirname, './config/.env') })


module.exports = {

    holding: () => {
        return new Promise(async (res, rej) => {
          try {
    
            axios.get('https://api.kite.trade/portfolio/holdings', {
      headers: {
        "X-Kite-Version": "3",
        "Authorization":`token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`
      }
    })
      .then(response => {
    
        res(response)
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    
          } catch (error) {
            console.log(error);
            rej({ status: 500, message: "Something Went Wrong..!!!" })
          }
        })
      },


      holdingAuctionList: () => {
        return new Promise(async (res, rej) => {
          try {
    
            axios.get('https://api.kite.trade/portfolio/holdings/auctions', {
      headers: {
        "X-Kite-Version": "3",
        "Authorization":`token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`
      }
    })
      .then(response => {
    
        res(response)
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    
          } catch (error) {
            console.log(error);
            rej({ status: 500, message: "Something Went Wrong..!!!" })
          }
        })
      },




      position: () => {
        return new Promise(async (res, rej) => {
          try {
    
            axios.get('https://api.kite.trade/portfolio/positions', {
      headers: {
        "X-Kite-Version": "3",
        "Authorization":`token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`
      }
    })
      .then(response => {
    
        res(response)
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    
          } catch (error) {
            console.log(error);
            rej({ status: 500, message: "Something Went Wrong..!!!" })
          }
        })
      }
}



