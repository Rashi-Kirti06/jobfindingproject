import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import { Job } from "../models/jobSchema.js";

export const postJob = catchAsyncErrors(async (req, res, next) => {
    try {
        const {
            title, jobType, location, 
            companyName, introduction, 
            responsibility, qualification, 
            offer, salary, jobNiche, 
            hiringMultipleCandidates, 
            personalWebsiteTitle, personalWebsiteUrl
        } = req.body;

        // Validate required fields
        if (!title || !jobType || !location || 
            !companyName || !introduction || 
            !responsibility || !qualification || 
            !salary || !jobNiche) {
            return next(new ErrorHandler("Please provide all job details!", 400));
        }

        // Validate website fields consistency
        if ((personalWebsiteTitle && !personalWebsiteUrl) || (!personalWebsiteTitle && personalWebsiteUrl)) {
            return next(new ErrorHandler("Provide both website URL and title, or leave both blank!", 400));
        }

        // Create job posting
        const postedBy = req.user._id;
        const job = await Job.create({
            title, jobType, location, companyName, introduction, responsibility,
            qualification, offer, salary, hiringMultipleCandidates, 
            personalWebsite: {
                title: personalWebsiteTitle, 
                url: personalWebsiteUrl
            }, 
            jobNiche, postedBy
        });

        res.status(201).json({
            success: true,
            message: "Job posted successfully!",
            job,
        });

    } catch (error) {
        next(error);  // Pass the error to the error handling middleware
    }
});


getAllJobs, getMyJobs, deleteJob, getASingleJob,