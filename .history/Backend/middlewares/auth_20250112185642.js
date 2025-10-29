import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddlewares.js";
import jwt from "jwtwebtoken";
export const isAuthenticated = catchAsyncErrors(async(req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("User is not authenticated.", 400));
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    
})