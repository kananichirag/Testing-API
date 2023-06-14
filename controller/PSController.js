const {response} = require('../middleware/response')
const PsServices = require('../services/PSServices')


const Holding = async (req,res) => {
    try {
     
     let  resp = await PsServices.holding()

     if(resp){
         return response("Success..!!!",resp.data,200,res)
     }

    } catch (error) {
     console.log(error);
     return response("SOmething Wrong....!!",{},500,res)
    }
}

module.exports = {
    Holding
}