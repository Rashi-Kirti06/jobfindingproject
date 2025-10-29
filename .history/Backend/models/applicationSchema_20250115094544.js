import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        id: {
            type: 
        }
    }
})

export const application = mongoose.model("application", applicationSchema);