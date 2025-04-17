import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "../routes/userRoutes.js";
import corsOptions from "../config/corsOptions.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  console.error("mongo url is undefine. check your env");
  process.exit(1);
}

app.use("/api", router);
// mongoose
//   .connect(MONGODB_URL)
//   .then(() => {
//     console.log("database connected successfully");
//     app.listen(PORT, console.log(`server is running on PORT ${PORT}`));
//   })
//   .catch((error) => console.log(error));
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  })
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });
