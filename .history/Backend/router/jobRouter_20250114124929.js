import express from "express";
import { isAuthenticated } from "../middlewares/auth";
import { postJob } from "../controllers/jobControllers";
const router = express.Router();
router.post("/post", isAuthenticated, isAuthen postJob);

