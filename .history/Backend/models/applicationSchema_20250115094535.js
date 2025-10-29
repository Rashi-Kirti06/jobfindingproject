import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        
    }
})

export const application = mongoose.model("application", applicationSchema);