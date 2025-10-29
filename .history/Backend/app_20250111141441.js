import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
config({path: "./config/config.env"})


app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
})); 

app.use(cookieParser());    //whatever the token gonna be generate coz of this 
app.use(express.json());     //token ko json form me convert krta h
app.use(express.urlencoded({extended:true}));
export default app;