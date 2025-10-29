export const catchAsyncErrors = (theFunction) => {
    return (req, res, next)={
        Promise.resolve(thefunction(req, res, next)).catch(error);
    }
}