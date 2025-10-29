import express from "express";
import { employerGetAllApplication, jobSeekerGetAllApplication, postApplication } from "../controllers/applicationControllers";

const router = express.Router();
router.post("/postApplication", postApplication);
router.get("/employerGetAllApplication", employerGetAllApplication);
router.get("/jobSeekerGetAllApplication", jobSeekerGetAllApplication);
router.delete("/delete/:id")

export default router;