import { userSchema } from "../schemas/user_schema";
const posts = require("./src/posts");

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
