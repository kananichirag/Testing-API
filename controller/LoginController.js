const UserServices = require("../services/userServices");
const { response } = require("../middleware/response");

const Login = async (req, res) => {
  try {
    let resp = await UserServices.login();

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("SOmething Wrong....!!", {}, 500, res);
  }
};

const Funds = async (req, res) => {
  try {
    let resp = await UserServices.FundsAndMargin();

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("SOmething Wrong....!!", {}, 500, res);
  }
};
const userProfile = async (req, res) => {
  try {
    let resp = await UserServices.userProfile();

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("SOmething Wrong....!!", {}, 500, res);
  }
};

module.exports = {
  Login,
  Funds,
  userProfile,
};
