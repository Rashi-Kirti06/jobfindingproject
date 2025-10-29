import express from "express";
import { config } from "dotenv";
const app = express();
config({path: "./config/config.env"})

app.use(c)


export default app;