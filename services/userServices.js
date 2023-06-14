var KiteConnect = require("kiteconnect").KiteConnect;
const path = require('path')
require('dotenv').config({path:path.join(__dirname,'./config/.env')})
module.exports = {
    login:() => {
        return new Promise(async (res,rej) => {
            try {
               

var kc = new KiteConnect({
  api_key: process.env.API_KEY,
});

kc.generateSession(process.env.REQUEST_TOKEN, process.env.API_SECRET)
  .then(function (response) {
    init();
    res({data:response})
  })
  .catch(function (err) {
    console.log(err);
  });

function init() {

  kc.getMargins()
    .then(function (response) {
 
       res({result:response,message:"Success...!!!!"}) 

    })
    .catch(function (err) {
        console.log("Error");

    });
}
            } catch (error) {
                console.log(error);
                rej({status:500,message:"Something Went Wrong..!!!"})
            }
        })
    }
}