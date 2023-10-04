import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPassword,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

// router object
const router = express.Router();

// routing
// Register -- post
router.post("/register", registerController);

// login -- post
router.post("/login", loginController);

// forgot password
router.post("/forgot-password", forgotPassword);

// test route --
router.get("/test", requireSignIn, isAdmin, testController);

// protected user - route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin - route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
