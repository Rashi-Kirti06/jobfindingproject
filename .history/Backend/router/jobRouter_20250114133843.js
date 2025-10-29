import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth";
import { postJob } from "../controllers/jobControllers";
const router = express.Router();
router.post("/post", isAuthenticated, isAuthorized(""), post);

export default router;