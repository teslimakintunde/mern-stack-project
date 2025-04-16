import express from "express";
import { createNewUser } from "../controller/userController.js";
const router = express.Router();

router.post("/user", createNewUser);

export default router;
