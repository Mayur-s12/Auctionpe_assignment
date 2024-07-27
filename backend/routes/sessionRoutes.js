import express from "express";
import { endSession, startSession } from "../controllers/sessionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/start", authMiddleware, startSession);
router.post("/end", authMiddleware, endSession);

export default router;
