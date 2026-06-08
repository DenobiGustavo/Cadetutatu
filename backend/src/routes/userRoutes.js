import { Router } from "express"
import { registerUser, loginUser, getUserProfile, updateUserProfile } from "../controllers/userController.js"
import userAuthMiddleware from "../middlewares/userAuthMiddleware.js"

const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile", userAuthMiddleware, getUserProfile)
router.put("/profile", userAuthMiddleware, updateUserProfile)

export default router