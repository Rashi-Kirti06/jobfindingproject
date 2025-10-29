export const sendToken = (user, statusCode, res, message) =>{
    const token = user.getJWTToken();
    const options = {
        expires: new Date(
            Date.now
        )
    }
}
