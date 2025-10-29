import express from "express";
import { employerGetAllApplication, postApplication } from "../controllers/applicationControllers";

const router = express.Router();
router.post("/postApplication", postApplication);
router.get("/employerGetAllApplication", employerGetAllApplication)

export default router;