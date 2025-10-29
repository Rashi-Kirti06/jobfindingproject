import mongoose from "mongoose";
export const connection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "JOB_PORTAL"
    }).then(()=>{
        console.log("connect")
    })
}