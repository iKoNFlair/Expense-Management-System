import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userController.js";

// router object
const router = express.Router();

// routes
// POST || LOGIN
router.post("/login", loginController);

// POST || REGISTER USER
router.post("/register", registerController);

export default router;
