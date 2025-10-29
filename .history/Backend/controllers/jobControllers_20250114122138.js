import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../middlewares/errorMiddlewares";
import { Job, User } from "../models/jobSchema";

export const postJob = catchAsyncErrors(async(req, res, next)=>{
    const { title, jobType, location, }
})



