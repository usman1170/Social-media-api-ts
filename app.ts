import express, { Request, Response } from "express";
import { userSchema, postSchema } from "./src/schemas";
const posts = require("./src/posts");
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/usman")
  .then(() => console.log("Connection success"))
  .catch((err) => console.log(err));

// const app = express();
// app.get("/", (req: Request, res: Response) => {
//   res.status(200).send("hello type script");
// });
// app.listen(5000, () => {
//   console.log("server listen on port 5000");
// });
(err: any, result: any) => {
  if (err) {
    console.error(err);
    return;
  }
  
}
const Users = mongoose.model("Users", userSchema);

const createDoc = async () => {
  try {
    const user1 = new Users({
      name: "new post ",
      email: "u1111@gmail.com",
      type: "New Developer",
      phone: 923012146783,
      active: true,
    });

    const result = await posts.MyPosts.insertMany([
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
    const result = await posts.MyPosts.find({
      // $and: [{ catagory: "Health" }, { inventory: 50 }],
    })
      .select({ date: 1 })
      .sort({ date: -1 });
    console.log(result);
  } catch (error) {
    console.log(`Error is = ${error}`);
  }
};

const updateDocument = async (_id: any, update: any) => {
  try {
    const result = await posts.MyPosts.updateMany(
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
    const result = await posts.MyPosts.deleteOne({ _id });

    console.log(`Result is = ${result}`);
  } catch (error) {
    console.log(`Error is = ${error}`);
  }
};
// deleteDocument("66e53590dfcb3395d7fff02a");
// updateDocument("66e53590dfcb3395d7fff02a", "Coding");

// getDocuments();

createDoc();
