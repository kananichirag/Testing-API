const gttServices = require("../services/gttServices");
const { response } = require("../middleware/response");

const allGtt = async (req, res) => {
  try {
    let resp = await gttServices.allGtt();

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("Something Wrong....!!", {}, 500, res);
  }
};
const gttById = async (req, res) => {
  try {
    let resp = await gttServices.gttById(req.params.id);

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("Something Wrong....!!", {}, 500, res);
  }
};
const placeGtt = async (req, res) => {
  try {
    let resp = await gttServices.placeGtt(req.body);

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("Something Wrong....!!", {}, 500, res);
  }
};
const modifyGtt = async (req, res) => {
  try {
    let resp = await gttServices.modifyGtt(req.params.id, req.body);

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("Something Wrong....!!", {}, 500, res);
  }
};
const deleteGtt = async (req, res) => {
  try {
    let resp = await gttServices.deleteGtt(req.params.id);

    if (resp) {
      return response("Success..!!!", resp.data, 200, res);
    }
  } catch (error) {
    console.log(error);
    return response("Something Wrong....!!", {}, 500, res);
  }
};

module.exports = {
    allGtt,
    gttById,
    placeGtt,
    modifyGtt,
    deleteGtt
};
