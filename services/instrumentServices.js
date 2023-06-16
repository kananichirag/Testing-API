const path = require('path')
const axios = require('axios')
require('dotenv').config({ path: path.join(__dirname, './config/.env') })



module.exports = {

    InstrumentList: () => {
        return new Promise(async (res, rej) => {
            try {

                axios.get('https://api.kite.trade/instruments', {
                    headers: {
                        "X-Kite-Version": "3",
                        "Authorization": `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`
                    }
                })
                    .then(response => {

                        res(response)
                        // console.log(response.data);
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



    FindByInstrument: (Name) => {
        return new Promise(async (res, rej) => {
            try {
                const name = Name.toUpperCase();
                axios.get(`https://api.kite.trade/quote?i=BSE:${name}`, {
                    headers: {
                        "X-Kite-Version": "3",
                        "Authorization": `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`
                    }
                })
                    .then(response => {

                        res(response)
                        // console.log(response.data);
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



    ohlc: (Name) => {
        return new Promise(async (res, rej) => {
            try {
                const name = Name.toUpperCase();
                axios.get(`https://api.kite.trade/quote/ohlc?i=${name}`, {
                    headers: {
                        "X-Kite-Version": "3",
                        "Authorization": `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`
                    }
                })
                    .then(response => {

                        res(response)
                        // console.log(response.data);
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



    
    LTP: (Name) => {
        return new Promise(async (res, rej) => {
            try {
                const name = Name.toUpperCase();
                axios.get(`https://api.kite.trade/quote/ltp?i=${name}`, {
                    headers: {
                        "X-Kite-Version": "3",
                        "Authorization": `token ${process.env.API_KEY}:${process.env.ACC_TOKEN}`
                    }
                })
                    .then(response => {

                        res(response)
                        // console.log(response.data);
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