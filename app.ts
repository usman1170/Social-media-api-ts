import express, { Request, Response } from "express";
import { userRouter } from "./routers/user_router";
import { postRouter } from "./routers/post_router";
require("./database/connection");

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello type script root level");
});

app.listen(5000, () => {
  console.log("server listen on port 5000");
});
