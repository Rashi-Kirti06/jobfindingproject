import { catchAsyncErrors } from "./catchAsyncErrors.js";

export const isAuthenticated = catchAsyncErrors(async(req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new Err)
    }
})