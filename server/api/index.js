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
// MongoDB Connection (Serverless optimized)

let cachedDb = null;

async function connectDB() {
  if (cachedDb) return cachedDb;
  try {
    const conn = await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false,
    });
    cachedDb = conn;
    console.log("MongoDB connected successfully");
    return conn;
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    throw err;
  }
}
// Routes
app.use("/", router);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Vercel serverless handler
export default async (req, res) => {
  try {
    await connectDB();
    app(req, res);
  } catch (err) {
    console.error("Serverless handler error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
};

// Local development server
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    connectDB().then(() => {
      console.log(`Server running on port ${PORT}`);
    });
  });
}

// mongoose
//   .connect(MONGODB_URL)
//   .then(() => {
//     console.log("database connected successfully");
//     app.listen(PORT, console.log(`server is running on PORT ${PORT}`));
//   })
//   .catch((error) => console.log(error));
// mongoose
//   .connect(MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
//   })
//   .then(() => console.log("Database connected"))
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//     process.exit(1); // Exit if DB connection fails
//   });
