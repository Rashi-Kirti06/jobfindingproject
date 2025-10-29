import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connection } from "./Database/connection.js"
import { errorMiddleware } from "./middlewares/errorMiddlewares.js";
import fileUpload from "express-fileupload";
import userRouter from "./router/userRouter.js";

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

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

app.use("/api/v1/user", userRouter);

connection();
app.use(errorMiddleware);

export default app;

