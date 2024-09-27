import mongoose from "mongoose";
import { userSchema } from "../schemas/user_schema";
import { UsersModel } from "../models/models";

const getUsers = async () => {
  try {
    const result = await UsersModel.find({}).sort({ date: -1 });
    return result;
  } catch (error) {
    console.log(`Error is = ${error}`);
    return error;
  }
};

const getOneUsers = async (_id: any) => {
  try {
    const result = await UsersModel.findById(_id);
    return result;
  } catch (error) {
    console.log(`Error is = ${error}`);
    return error;
  }
};

const deleteuser = async (_id: any) => {
  try {
    const result = await UsersModel.findByIdAndDelete({ _id });
    console.log(`Result is = ${result}`);
  } catch (error) {
    console.log(`Error is = ${error}`);
  }
};

export { getUsers, getOneUsers, deleteuser };
