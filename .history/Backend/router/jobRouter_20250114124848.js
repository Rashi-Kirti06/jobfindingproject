import express from "express";
import { isAuthenticated } from "../middlewares/auth";
const router = express.Router();
return.post("/post", isAuthenticated, post)