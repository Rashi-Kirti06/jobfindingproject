class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error.";

    if(err.name === "CastError"){
        const message = `Invalid ${err-party}`;
        err = new ErrorHandler(message, 400)
    }
    if(err.code === 1000){
        const message = `Duplicate ${Object.keu(err.keyValue)} Entered.`
        err = new ErrorHandler(message, 400)
    }

    if(err.name === "JsonWebTokenError"){
        const message = `Json web token is invalid, Try Again`;
        err = new ErrorHandler(message, 400)
    }


    if(err.name === "TokenExpiredError"){
        const message = `Json Web Token is Expired, Try Again and Login again`;
        err = new ErrorHandler(message, 400)
    }
    return res.status(err.status).json({
        success: false,
        message: err, message, 
        err: err
    })
}

export const 