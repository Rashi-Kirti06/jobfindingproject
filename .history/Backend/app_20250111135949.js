import express from "express";
import { config } from "dotenv";
import
const app = express();
config({path: "./config/config.env"})

app.use(cors)


export default app;