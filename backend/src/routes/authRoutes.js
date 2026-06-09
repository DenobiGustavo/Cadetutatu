import { Router } from "express";
import { getAdminProfile, loginAdmin, updateAdminProfile } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = Router();

router.post("/login", loginAdmin);
router.get("/profile", authMiddleware, getAdminProfile);
router.put("/profile", authMiddleware, upload.single("profileImage"), updateAdminProfile);

export default router;
