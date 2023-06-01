const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlenght: 1,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      minlenght: 7,
      maxlength: 20,
      required: [true, "Phone is required"],
    },
    address: {
      type: String,
      minlenght: 5,
      required: [true, "Address is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("User", userSchema);

const orderSchema = Schema(
  {
    items: [
      {
        shop: String,
        id: String,
        name: String,
        imageUrl: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalCost: { type: Number, required: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("Order", orderSchema);

const addOrderSchema = Joi.object({
  name: Joi.string().min(1),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(20).required(),
  address: Joi.string().required(),
  totalCost: Joi.number().required(),
  items: Joi.array()
    .items(
      Joi.object({
        shop: Joi.string().required(),
        id: Joi.string().required(),
        name: Joi.string().required(),
        imageUrl: Joi.string().uri().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
        description: Joi.string(),
        _id: Joi.string(),
      })
    )
    .required(),
});

module.exports = { User, Order, addOrderSchema };
