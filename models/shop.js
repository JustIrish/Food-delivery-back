const { Schema, model } = require("mongoose");

const shopSchema = Schema({
  id: String,
  name: String,
  products: [
    {
      id: String,
      name: String,
      description: String,
      imageUrl: String,
      price: Number,
    },
  ],
});

const Shop = model("Shop", shopSchema);

module.exports = {
  Shop,
};
