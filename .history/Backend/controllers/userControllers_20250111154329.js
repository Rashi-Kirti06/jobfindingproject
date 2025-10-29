import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import {User} from "../models/userSchema.js";

export const register = catchAsyncErrors(async(req, res, next)=>{
    try {
        const {name, email, phone, address, password, role, firstNiche, secondNiche, thirdNiche, coverLetter} = req.body;

        if(!name || !email || !phone || !address || !role){
            return next(new ErrorHandler("All fileds"))
        }
    } catch (error) {
        
    }
})