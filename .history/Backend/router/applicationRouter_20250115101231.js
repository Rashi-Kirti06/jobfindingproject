import express from "express";
import { deleteApplication, employerGetAllApplication, jobSeekerGetAllApplication, postApplication } from "../controllers/applicationControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.post("/post/:id", isAuthenticated, isAut ,postApplication);
router.get("/employerGetAllApplication", employerGetAllApplication);
router.get("/jobSeekerGetAllApplication", jobSeekerGetAllApplication);
router.delete("/delete/:id", deleteApplication);

export default router;