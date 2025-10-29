import { catchAsyncErrors } from "./catchAsyncErrors";

export const isAuthenticated = catchAsyncErrors(async(req, res, next))