import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "K"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(err=>{
        console.log(`Some error occurred while connecting to database: ${err}`)
    })
}