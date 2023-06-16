const { response } = require("../middleware/response");
const historicalServices = require("../services/historicalServices");

const data = async (req, res) => {
  try {
    let resp = await historicalServices.data(req.params.instrument_token,req.params.interval);

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("SOmething Wrong....!!", {}, 500, res);
  }
};

module.exports = {
  data,

};
