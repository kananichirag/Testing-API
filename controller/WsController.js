const { response } = require("../middleware/response");
const WsServices = require("../services/WsServices");

const WS = async (req, res) => {
  try {
    let resp = await WsServices.ws();

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("SOmething Wrong....!!", {}, 500, res);
  }
};

const WS2 = async (req, res) => {
  try {
    let resp = await WsServices.ws2();

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("SOmething Wrong....!!", {}, 500, res);
  }
};

module.exports = {
  WS,
  WS2,
};
