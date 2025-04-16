import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  console.error("mongo url is undefine. check your env");
  process.exit(1);
}

app.use("/api", router);
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, console.log(`server is running on PORT ${PORT}`));
  })
  .catch((error) => console.log(error));
