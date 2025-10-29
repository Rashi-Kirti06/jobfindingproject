import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import {Application} from "../models/applicationSchema.js";

export const postApplication = catchAsyncErrors(async(req, res, next)=>{
    const {id} = req.params;
    const {name, email, phone, address, coverLetter} = req.body;
    if(!name || !email || !phone || !address || !coverLetter){
        return next(new ErrorHandler("All fields are required!", 400));
    }
    const jobSeekerInfo = {
        id: req.user._id,
        name, email, address, phone, role, coverLetter, resume
    }
});

export const employerGetAllApplication = catchAsyncErrors(async(req, res, next)=>{

});

export const jobSeekerGetAllApplication = catchAsyncErrors(async(req, res, next)=>{

});

export const deleteApplication = catchAsyncErrors(async(req, res, next)=>{

})