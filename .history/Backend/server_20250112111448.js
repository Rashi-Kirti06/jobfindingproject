import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening at port ${process.env.PORT}`);
});
