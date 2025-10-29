import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            requi
        }
    }
})

export const application = mongoose.model("application", applicationSchema);