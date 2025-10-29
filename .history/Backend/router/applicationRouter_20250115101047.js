import express from "express";
import { deleteApplication, employerGetAllApplication, jobSeekerGetAllApplication, postApplication } from "../controllers/applicationControllers";

const router = express.Router();
router.post("/post/:id", isA postApplication);
router.get("/employerGetAllApplication", employerGetAllApplication);
router.get("/jobSeekerGetAllApplication", jobSeekerGetAllApplication);
router.delete("/delete/:id", deleteApplication);

export default router;