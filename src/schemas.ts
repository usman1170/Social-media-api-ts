import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 30,
    lowercase: true,
    // enum: ["health", "photography", "developer", "travller"],
  },
  email: {
    type: String,
    required: true,
    validate(value: string) {
      if (!validator.isEmail(value)) {
        throw new Error("Email not validate");
      }
    },
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  phone: Number,
  active: Boolean,
});
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  catagory: String,
  date: {
    type: Date,
    default: Date.now,
  },
  inventory: Number,
  onSale: {
    type: Boolean,
    default: false,
  },
});

export { userSchema, postSchema };
