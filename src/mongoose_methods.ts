import mongoose from "mongoose";
import { userSchema } from "../schemas/user_schema";
import { MyPosts } from "../models/models";

const Users = mongoose.model("Users", userSchema);

const createDoc = async () => {
  try {
    const result = await MyPosts.insertMany([
      //   user1,
      //   posts.post2,
      //   posts.post3,
      //   posts.post4,
    ]);
    console.log(result);
  } catch (error) {
    console.log(`Error is = ${error}`);
  }
};
const getDocuments = async () => {
  try {
    const result = await MyPosts.find({}).sort({ date: -1 });

    console.log(result);
    return result;
  } catch (error) {
    console.log(`Error is = ${error}`);
  }
};

const updateDocument = async (_id: any, update: any) => {
  try {
    const result = await MyPosts.updateMany(
      { _id },
      { $set: { catagory: update } }
    );

    console.log(`Result is = ${result}`);
  } catch (error) {
    console.log(`Error is = ${error}`);
  }
};

const deleteDocument = async (_id: any) => {
  try {
    const result = await MyPosts.deleteOne({ _id });

    console.log(`Result is = ${result}`);
  } catch (error) {
    console.log(`Error is = ${error}`);
  }
};
// deleteDocument("66e53590dfcb3395d7fff02a");
// updateDocument("66e53590dfcb3395d7fff02a", "Coding");
// getDocuments();
// createDoc();
export { createDoc, getDocuments, deleteDocument, updateDocument };
