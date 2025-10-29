export const catchAsyncErrors = (theFunction) => {
    return (req, res, next)={
        Promiseresolve(theFunction(req, res, next)).catch(error);
    }
}