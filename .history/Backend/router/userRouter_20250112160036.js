import express from "express";
import { register } from "../controllers/userControllers.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", register);

export default router;