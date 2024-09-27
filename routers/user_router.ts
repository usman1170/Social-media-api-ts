import express, { Request, Response } from "express";
import { UsersModel } from "../models/models";
import mongoose from "mongoose";
import {
  deleteuser,
  getOneUsers,
  getUsers,
} from "../controllers/user_controller";
require("../database/connection");

const userRouter = express.Router();

userRouter.post("/create_user", async (req: Request, res: Response) => {
  try {
    const user = new UsersModel(req.body);
    // console.log(user);
    const newUser = await user.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.get("/get_users", async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

userRouter.get("/get_users/:id", async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).send({ message: "Invalid user ID" });
      return;
    }
    const user = await getOneUsers(_id);
    console.log(user);

    if (!user) {
      res.status(404).send({ message: "User not found" });
    } else {
      res.status(200).send(user);
    }
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

userRouter.delete("/get_users/:id", async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).send({ message: "Invalid user ID" });
      return;
    }
    const deletedUser = await deleteuser(_id);
    if (!_id) {
      res.status(404).send({ message: `User not found with this id : ${_id}` });
    } else {
      res.status(204).send({ UserDeleted: deletedUser });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

export { userRouter };
