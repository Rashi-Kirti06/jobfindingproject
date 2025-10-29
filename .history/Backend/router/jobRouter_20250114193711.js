import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { postJob } from "../controllers/jobControllers.js";

const router = express.Router();

// Ensure `isAuthenticated` populates `req.user` before `isAuthorized`
router.post("/post", isAuthenticated, isAuthorized("Employer"), postJob);
router.post("/getall", getallJobs);
router.
export default router;
