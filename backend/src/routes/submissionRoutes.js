import { Router } from "express";
import {
  approveSubmission,
  createSubmission,
  getPendingSubmissions,
  rejectSubmission,
} from "../controllers/submissionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";
import userAuthMiddleware from "../middlewares/userAuthMiddleware.js";

const router = Router();

router.post("/", userAuthMiddleware, upload.single("image"), createSubmission);
router.get("/pending", authMiddleware, getPendingSubmissions);
router.put("/:id/approve", authMiddleware, approveSubmission);
router.put("/:id/reject", authMiddleware, rejectSubmission);

export default router;
