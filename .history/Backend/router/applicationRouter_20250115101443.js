import express from "express";
import { deleteApplication, employerGetAllApplication, jobSeekerGetAllApplication, postApplication } from "../controllers/applicationControllers.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";

const router = express.Router();
router.post("/post/:id", isAuthenticated, isAuthorized("Job Seeker"), postApplication);
router.get("/employer/getall", isAuthenticated, isAuthorized("Employer"), employerGetAllApplication);
router.get("/jobSeeker/getall", isAuthenticated, isAuthorized("Job Seeker"), jobSeekerGetAllApplication);
router.delete("/delete/:id", deleteApplication);

export default router;