import express from "express";
import { login, register } from "../controllers/userControllers.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;


const router1 = express.Router();
router1.post("/register", register);
