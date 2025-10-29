class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internavl";

    if(err.name === "CastError"){
        const message = `Invalid ${err-party}`;
        err = new ErrorHandler(message, err.statusCode)
    }
    return res.status(err.status).json({
        success: false,
        message: err, message, 
        err: err
    })
}