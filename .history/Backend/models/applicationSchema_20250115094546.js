import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        id: {
            type: mong
        }
    }
})

export const application = mongoose.model("application", applicationSchema);