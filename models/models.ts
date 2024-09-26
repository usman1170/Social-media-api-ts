import mongoose from "mongoose";
import { postSchema } from "../schemas/post_schema";
import { userSchema } from "../schemas/user_schema";

const UsersModel = mongoose.model("User", userSchema);
const MyPosts = mongoose.model("Post", postSchema);

export { UsersModel, MyPosts };
