import express from "express";
import {
  createNewUser,
  getAllUsers,
  getUserById,
} from "../controller/userController.js";
const router = express.Router();

router.post("/user", createNewUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);

export default router;
