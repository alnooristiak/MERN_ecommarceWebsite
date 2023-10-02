import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

// router object
const router = express.Router();

// routing
// Register -- post
router.post("/register", registerController);

// login -- post
router.post("/login", loginController);

export default router;
