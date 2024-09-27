import express, { Request, Response } from "express";
import { MyPosts } from "../models/models";
import { getPosts } from "../controllers/posts_controller";
require("../database/connection");

const postRouter = express.Router();

postRouter.get("/get_posts", async (req: Request, res: Response) => {
  try {
    const posts = await getPosts();
    res.status(200).send(posts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

postRouter.post("/create_post", async (req: Request, res: Response) => {
  try {
    const postBody = new MyPosts(req.body);
    const newPosts = await postBody.save();
    res.status(201).send(newPosts);
  } catch (error: any) {
    res.status(500).send(`Error fetching posts: ${error.message}`);
  }
});

export { postRouter };
