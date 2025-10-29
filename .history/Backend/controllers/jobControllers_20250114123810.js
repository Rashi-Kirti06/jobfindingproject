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
            personalWebsiteTitle, personalWebsiteUrl, newLettersSent, 
            jobPostedOn, postedBy 
        } = req.body;
        if( !title || !jobType || !location || 
            !companyName || !introduction || 
            !responsibility || !qualification || 
            !salary || !jobNiche){
                return next(new ErrorHandler("Please provide all job details!", 400));
            }
            if((personalWebsiteTitle && !personalWebsiteUrl) || (!personalWebsiteTitle && personalWebsiteUrl)){
                return next(new ErrorHandler("Provide website url and title, leave both blank!", 400));
            }

            const postedBy = req.user._id;
            
    } catch (error) {
        
    }
})



