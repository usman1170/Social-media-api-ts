import mongoose from "mongoose";
import validator from "validator";

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

export { postSchema };
