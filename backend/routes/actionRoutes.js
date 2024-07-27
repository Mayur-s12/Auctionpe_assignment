import express from "express";
import {
  getActionsBySession,
  logAction,
} from "../controllers/actionsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/log", authMiddleware, logAction);
router.get("/:sessionId", authMiddleware, getActionsBySession);

export default router;
