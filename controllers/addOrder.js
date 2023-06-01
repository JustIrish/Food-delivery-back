const { User, Order } = require("../models/order");
const { ctrlWrapper } = require("../helpers");

const addOrder = async (req, res) => {
  const { name, email, phone, address, items, totalCost } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    const newUser = await User.create({
      name,
      email,
      phone,
      address,
    });
    const { _id: owner } = newUser;

    const newOrder = await Order.create({ items, totalCost, owner });
    res.status(201).json(newOrder);
  } else {
    const { _id: owner } = user;

    const newOrder = await Order.create({ items, totalCost, owner });
    res.status(201).json(newOrder);
  }
};

module.exports = {
  addOrder: ctrlWrapper(addOrder),
};
