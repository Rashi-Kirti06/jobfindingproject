import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { postJob } from "../controllers/jobControllers.js";

const router = express.Router();

// Ensure `isAuthenticated` populates `req.user` before `isAuthorized`
router.post("/post", isAuthenticated, postJob);

export default router;
