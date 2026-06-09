import { Router } from "express";
import {
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";
import userAuthMiddleware from "../middlewares/userAuthMiddleware.js";

const router = Router();

router.post("/register", authMiddleware, registerUser);
router.post("/login", loginUser);
router.get("/profile", userAuthMiddleware, getUserProfile);
router.put("/profile", userAuthMiddleware, upload.single("profileImage"), updateUserProfile);

export default router;
