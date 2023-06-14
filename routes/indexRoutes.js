const express = require('express');
const v1 = express.Router();

v1.get('/',(req,res) => {
    res.send("Index Route is Working..!!")
})

module.exports = v1;