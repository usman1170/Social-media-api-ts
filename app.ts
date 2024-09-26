import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { connectionString } from "./secrets";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connection success"))
  .catch((err) => console.log(err));

const app = express();
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello type script");
});
app.listen(5000, () => {
  console.log("server listen on port 5000");
});
