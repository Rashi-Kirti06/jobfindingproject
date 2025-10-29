// import express from "express";
// import { config } from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import { connection } from "./Database/connection.js"
// import { errorMiddleware } from "./middlewares/errorMiddlewares.js";

// const app = express();
// config({path: "./config/config.env"})

// app.use(cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
// })); 

// app.use(cookieParser());    //whatever the token gonna be generate coz of this 
// app.use(express.json());     //token ko json form me convert krta h
// app.use(express.urlencoded({extended:true}));

// connection();
// app.use(errorMiddleware);

// export default app;


import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
config({path: "./config/config.env"});

app.use({
    origin: [process.env.F]
})
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
export default app;