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
    adress: {
      type: String,
      minlenght: 5,
      required: [true, "Address is required"],
    },
    totalCost: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(20).required(),
  address: Joi.string().required(),
  totalCost: Joi.number().required(),
});

const User = model("User", userSchema);

module.exports = { User, addSchema };
