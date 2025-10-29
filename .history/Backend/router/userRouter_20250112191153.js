import express from "express";
import { login, logout, register } from "../controllers/userControllers.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", is)

export default router;

