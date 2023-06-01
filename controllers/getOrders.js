const { User, Order } = require("../models/order");
const { HttpError, ctrlWrapper } = require("../helpers");

const getOrders = async (req, res) => {
  const { email, phone } = req.body;
  const user = await User.findOne({ email, phone });

  if (!user) {
    throw HttpError(404, "Orders not found");
  }
  const { _id: owner } = user;
  const orders = await Order.find({ owner });
  res.status(200).json(orders);
};

module.exports = {
  getOrders: ctrlWrapper(getOrders),
};
