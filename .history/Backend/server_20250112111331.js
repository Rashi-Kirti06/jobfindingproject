import app from "./app.js";
import cloudinary

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening at port ${process.env.PORT}`);
});
