import { connectionString } from "../secrets";
import mongoose from "mongoose";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connection success"))
  .catch((err: any) => console.log(err));
