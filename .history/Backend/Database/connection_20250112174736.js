import mongoose from "mongoose";
export const connection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "JOB_PORTAL"
    }).then(()=>{
        console.log("connected to database.")
    }).catch(err=>{
        console.log(`some error occured while connecting to database: ${err}`)
    })
}

import mongoose from "mongoose";
export const connect = () =>{
    mongoose.connect(mongodb_url, {dbName: "job"}).then(()=>{console.log("connected!")})
}