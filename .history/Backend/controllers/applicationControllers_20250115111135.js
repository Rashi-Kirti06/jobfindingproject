import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import {Application} from "../models/applicationSchema.js";
import {Job} from "../models/jobSchema.js";
import {v2 as cloudinary} from "cloudinary";

export const postApplication = catchAsyncErrors(async(req, res, next)=>{
    const {id} = req.params;
    const {name, email, phone, address, coverLetter} = req.body;
    if(!name || !email || !phone || !address || !coverLetter){
        return next(new ErrorHandler("All fields are required!", 400));
    }

    const isAlreadyApplied = await Application.findOne({
        "jobInfo.id": id,
        "jobSeekerInfo.id": re.user._id,
    });

    if(isAlreadyApplied){
        return next(new ErrorHandler)
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
            const cloudinaryResponse = await cloudinary.uploader.upload(resume.tempFilePath,{
                folder:  "Job_Seeker_Resume"
            });
            if(!cloudinaryResponse || cloudinaryResponse.error){
                return next(new ErrorHandler("Failed to upload resume to cloudinary.", 400));
            }
            jobSeekerInfo.resume = {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url
            }
        } catch(error){
            return next(new ErrorHandler("Failed to upload resume", 500));
        }
    } else{
        if(req.user && !res.user.url){
            return next(new ErrorHandler("Please upload your resume", 400));
        }
        jobSeekerInfo.resume = {
            public_id: req.user && req.user.public_id,
            url: req.user && req.user.url,
        }
    }
    
    employerInfo = {
        id: jobDetails.postedBy,
        role: "Employer"
    }
    const jobInfo = {
        jobId: id,
        jobTitle: jobDetails.title
    };
    
});

export const employerGetAllApplication = catchAsyncErrors(async(req, res, next)=>{

});

export const jobSeekerGetAllApplication = catchAsyncErrors(async(req, res, next)=>{

});

export const deleteApplication = catchAsyncErrors(async(req, res, next)=>{

})