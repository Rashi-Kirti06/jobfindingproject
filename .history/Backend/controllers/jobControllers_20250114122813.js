import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../middlewares/errorMiddlewares";
import { Job, User } from "../models/jobSchema";

export const postJob = catchAsyncErrors(async(req, res, next)=>{
    try {
        const { 
            title, jobType, location, 
            companyName, introduction, 
            responsibility, qualification, 
            offer, salary, jobNiche, 
            hiringMultipleCandidates, 
            personalWebsite, newLettersSent, 
            jobPostedOn, postedBy 
        } = req.body;
        if( !title || !jobType || !location || 
            !companyName || !introduction || 
            !responsibility || !qualification || 
            !offer || !salary || !jobNiche || 
            !hiringMultipleCandidates || 
            !personalWebsite || !newLettersSent){
                return next(new ErrorHandler(""))
            }
    } catch (error) {
        
    }
})



