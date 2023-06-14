const express = require("express");
const axios = require('axios');
const path = require("path");
const app = express();
const KiteConnect = require('kiteconnect');
const IndexRoutes = require('./routes/indexRoutes')
require('dotenv').config({path:path.join(__dirname,'./config/.env')})

app.use(express.json())
app.use(express.urlencoded({extended:false}))





app.use('/v1',IndexRoutes)





app.listen(process.env.PORT, () => console.log(`🚀 Server Start At ${process.env.PORT}..!!!`));