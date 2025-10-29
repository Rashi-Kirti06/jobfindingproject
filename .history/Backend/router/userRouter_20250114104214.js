import express from "express";
import { getUser, login, logout, register, updatePassword, updateProfile } from "../controllers/userControllers.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/get", isAuthenticated, getUser);
router.put("/update/profile", isAuthenticated, updateProfile);   //Put ka use for updating profile
router.put("/update/password", isAuthenticated, updatePassword);

export default router;

