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


import mongoose from "mongoose";
export const connect=()=>{
    mongoose.connection(MONGO_URL, {dbName: "job"}).then(()=>{console.log("connected!")})
}



/*The config function from the dotenv package is used to load environment variables from a .env file into process.env in a Node.js application. Here's a breakdown of what it does:

Purpose of dotenv and config:
Environment Variables Management:
.env files allow you to store configuration settings like API keys, database credentials, and other environment-specific variables outside of your codebase. This keeps sensitive information out of your source code and version control.
Loading Variables:
When you call config(), it reads the .env file, parses the key-value pairs in it, and sets them as environment variables accessible through process.env.*/

/*
import cors from "cors";           cors work
ChatGPT said:
ChatGPT
The cors package in Node.js is used to enable Cross-Origin Resource Sharing (CORS). This is a mechanism that allows resources (like API responses) to be requested from another domain or origin, which is different from the server's domain. By default, web browsers block these cross-origin requests for security reasons.

What cors Does:
Cross-Origin Requests:

When a web application tries to make a request to a server on a different domain, protocol, or port, it is considered a cross-origin request. For example, if your frontend (hosted at http://localhost:3000) tries to make an API request to http://localhost:4000, this is cross-origin.
CORS Policy:

The server can specify what kind of cross-origin requests are allowed by sending specific HTTP headers. The cors middleware helps configure these headers automatically for your Node.js server.
Key Headers Managed by cors:

Access-Control-Allow-Origin: Specifies which domains can access the resources.
Access-Control-Allow-Methods: Specifies the HTTP methods that are allowed (e.g., GET, POST).
Access-Control-Allow-Headers: Specifies which headers can be used in the request.
Access-Control-Allow-Credentials: Indicates whether credentials (cookies, authorization headers) are allowed in the request.
*/