import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
        }
    }
})

export const application = mongoose.model("application", applicationSchema);