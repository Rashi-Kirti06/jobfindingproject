export const sendToken = (user, statusCode, res, message) =>{
    const token = user.getJWTToken();
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 *
        )
    }
}
