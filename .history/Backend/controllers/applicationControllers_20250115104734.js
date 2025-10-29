import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import {Application} from "../models/applicationSchema.js";
import {Job} from "../models/jobSchema.js";
import {v2 as cloudinary} from "cloudinary"

export const postApplication = catchAsyncErrors(async(req, res, next)=>{
    const {id} = req.params;
    const {name, email, phone, address, coverLetter} = req.body;
    if(!name || !email || !phone || !address || !coverLetter){
        return next(new ErrorHandler("All fields are required!", 400));
    }
    const jobSeekerInfo = {
        id: req.user._id,
        name, email, address, phone, coverLetter, resume, 
        role: "Job Seeker",
    };
    const jobDetails = await Job.findById(id);
    if(!jobDetails){
        return next(new ErrorHandler("Job not found.", 404));
    }
    if(req.files && req.files.resume){
        const {resume} = req.files;
        try{
            const cloudinaryResponse
        }
    }
});

export const employerGetAllApplication = catchAsyncErrors(async(req, res, next)=>{

});

export const jobSeekerGetAllApplication = catchAsyncErrors(async(req, res, next)=>{

});

export const deleteApplication = catchAsyncErrors(async(req, res, next)=>{

})