import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

export { userSchema };
