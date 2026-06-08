import { Router } from "express"
import {
    getSpecies,
    getSpeciesById,
    createSpecies,
    updateSpecies,
    deleteSpecies
} from "../controllers/speciesController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/", getSpecies)
router.get("/:id", getSpeciesById)
router.post("/", authMiddleware, createSpecies)
router.put("/:id", authMiddleware, updateSpecies)
router.delete("/:id", authMiddleware, deleteSpecies)

export default router