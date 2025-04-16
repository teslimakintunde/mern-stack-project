import express from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/userController.js";
const router = express.Router();

router.post("/user", createNewUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/update/user/:id", updateUser);
router.delete("/delete/user/:id", deleteUser);

export default router;
