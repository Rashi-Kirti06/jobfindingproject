import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import {Application} from "../models/applicationSchema.js";

export const postApplication = catchAsyncErrors(async(req, res, next)=>{

});

