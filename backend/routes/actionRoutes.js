import express from "express";
import { logAction } from "../controllers/actionsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/log", authMiddleware, logAction);

export default router;
