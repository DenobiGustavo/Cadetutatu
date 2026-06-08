import { Router } from "express"
import {
    createSubmission,
    getApprovedSubmissions,
    getPendingSubmissions,
    approveSubmission,
    rejectSubmission,
    deleteSubmission
} from "../controllers/submissionController.js"
import upload from "../middlewares/uploadMiddleware.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import userAuthMiddleware from "../middlewares/userAuthMiddleware.js"

const router = Router()

router.post("/", userAuthMiddleware, upload.single("image"), createSubmission)
router.get("/approved", getApprovedSubmissions)

router.get("/pending", authMiddleware, getPendingSubmissions)
router.put("/:id/approve", authMiddleware, approveSubmission)
router.put("/:id/reject", authMiddleware, rejectSubmission)
router.delete("/:id", authMiddleware, deleteSubmission)


export default router