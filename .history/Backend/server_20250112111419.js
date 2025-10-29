import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.Cl
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening at port ${process.env.PORT}`);
});
