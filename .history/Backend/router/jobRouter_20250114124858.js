import express from "express";
import { isAuthenticated } from "../middlewares/auth";
import { postJob } from "../controllers/jobControllers";
const router = express.Router();
return.post("/post", isAuthenticated, postJob);

