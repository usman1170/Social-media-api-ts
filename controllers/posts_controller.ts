import { MyPosts } from "../models/models";

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
  const getPosts = async () => {
    try {
      const result = await MyPosts.find({}).sort({ date: -1 });
  
      console.log(result);
      return result;
    } catch (error) {
      console.log(`Error is = ${error}`);
      return error;
    }
  };
  
  const updatePost = async (_id: any, update: any) => {
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
  
  const deletePost = async (_id: any) => {
    try {
      const result = await MyPosts.deleteOne({ _id });
  
      console.log(`Result is = ${result}`);
    } catch (error) {
      console.log(`Error is = ${error}`);
    }
  };
  export { createDoc, getPosts, deletePost, updatePost };
  