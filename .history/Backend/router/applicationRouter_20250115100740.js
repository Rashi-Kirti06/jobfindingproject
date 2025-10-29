import express from "express";
import { postApplication } from "../controllers/applicationControllers";

const router = express.Router();
router.post("/postApplication", postApplication)

export default router;