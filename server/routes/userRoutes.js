import express from "express";
import { createNewUser, getAllUsers } from "../controller/userController.js";
const router = express.Router();

router.post("/user", createNewUser);
router.get("/users", getAllUsers);

export default router;
