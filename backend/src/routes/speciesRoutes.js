import { Router } from "express";
import {
  createSpecies,
  deleteSpecies,
  getSpecies,
  updateSpecies,
} from "../controllers/speciesController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", getSpecies);
router.post("/", authMiddleware, createSpecies);
router.put("/:id", authMiddleware, updateSpecies);
router.delete("/:id", authMiddleware, deleteSpecies);

export default router;
