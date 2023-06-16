const {response} = require('../middleware/response')
const InstrumentServices = require('../services/instrumentServices')


const InstrumentList = async (req,res) => {
    try {
        
     let resp = await InstrumentServices.InstrumentList()
         if(resp){
            return response("Success..!!!",resp.data,200,res)
         }  
    } catch (error) {
        return response("Something Wromg..!!",{},500,res)
    }
}



const findbyInstrument = async (req,res) => {
    try {
        if(!req.query.instrument){
            return response("Instrument Name is Requied..!!",{},500,res)
        }
     let resp = await InstrumentServices.FindByInstrument(
        req.query.instrument
     )
         if(resp){
            return response("Success..!!!",resp.data,200,res)
         }  
    } catch (error) {
        return response("Something Wromg..!!",{},500,res)
    }
}



const Ohlc = async (req,res) => {
    try {
        if(!req.query.instrument){
            return response("Instrument Nmae is Requied..!!",{},500,res)
        }
     let resp = await InstrumentServices.ohlc(
        req.query.instrument
     )
         if(resp){
            return response("Success..!!!",resp.data,200,res)
         }  
    } catch (error) {
        return response("Something Wromg..!!",{},500,res)
    }
}


const ltp = async (req,res) => {
    try {
        if(!req.query.instrument){
            return response("Instrument Nmae is Requied..!!",{},500,res)
        }
     let resp = await InstrumentServices.LTP(
        req.query.instrument
     )
         if(resp){
            return response("Success..!!!",resp.data,200,res)
         }  
    } catch (error) {
        return response("Something Wromg..!!",{},500,res)
    }
}




module.exports = {
    InstrumentList,
    findbyInstrument,
    Ohlc,
    ltp
}