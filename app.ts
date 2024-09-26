import express, { Request, Response } from "express";
import { getDocuments } from "./src/mongoose_methods";
import { UsersModel } from "./models/models";
require("./database/connection");

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello type script root");
});

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send("hello for users to get all users");
});

app.post("/create_user", (req: Request, res: Response) => {
  try {
    const user = new UsersModel(req.body);
    console.log(user);
    user
      .save()
      .then((result) => {
        res.status(201).send(user);
        console.log(`Success result ${result}`);
      })
      .catch((err) => {
        res.status(400).send(`Error ${err}`);
        console.log(`Error ${err}`);
      });
  } catch (error) {
    res.status(500).send("Error while creating user");
  }
});

app.get("/posts", async (req: Request, res: Response) => {
  try {
    const posts = await getDocuments();
    res.status(200).json(posts);
  } catch (error: any) {
    res.status(500).send(`Error fetching posts: ${error.message}`);
  }
});

app.listen(5000, () => {
  console.log("server listen on port 5000");
});
