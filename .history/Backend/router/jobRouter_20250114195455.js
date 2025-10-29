import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { postJob, getMyJobs, deleteJob, getASingleJob } from "../controllers/jobControllers.js";

const router = express.Router();

// Ensure `isAuthenticated` populates `req.user` before `isAuthorized`
router.post("/post", isAuthenticated, isAuthorized("Employer"), postJob);
router.get("/getall", get);
router.get("/getMyJobs", isAuthenticated, isAuthorized("Employer"), getMyJobs);
router.delete("/delete/:id", isAuthenticated, isAuthorized("Employer"), deleteJob);
router.get("/get/:id", isAuthenticated, getASingleJob);

export default router;
