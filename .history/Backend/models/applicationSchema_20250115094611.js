import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required
        }
    }
})

export const application = mongoose.model("application", applicationSchema);