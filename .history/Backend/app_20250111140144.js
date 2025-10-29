import express from "express";
import { config } from "dotenv";
import cors from "cors";
const app = express();
config({path: "./config/config.env"})

app.use(cors({
    origin: [""]
}))


export default app;