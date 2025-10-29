import { catchAsyncErrors } from "./catchAsyncErrors.js";

export const isAuthenticated = catchAsyncErrors(async(req, res, next)=>{
    const {} = req.cookies;
})