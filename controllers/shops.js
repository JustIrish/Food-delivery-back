const { ctrlWrapper } = require("../helpers/ctrlWrapper");

const getShops = async (req, res) => {};

module.exports = {
  getShops: ctrlWrapper(getShops),
};
