import { Router } from "express";
import {
  createResearcher,
  deleteResearcher,
  getAdminOverview,
  listAllSubmissions,
  listResearchers,
  updateResearcher,
} from "../controllers/adminController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.use(authMiddleware);
router.get("/overview", getAdminOverview);
router.get("/researchers", listResearchers);
router.post("/researchers", createResearcher);
router.put("/researchers/:id", updateResearcher);
router.delete("/researchers/:id", deleteResearcher);
router.get("/submissions", listAllSubmissions);

export default router;
