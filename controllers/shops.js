const { Shop } = require("../models/shop");

const { ctrlWrapper } = require("../helpers/ctrlWrapper");

const getShops = async (req, res) => {
  const data = await Shop.find();

  res.status(200).json(data);
};

module.exports = {
  getShops: ctrlWrapper(getShops),
};
