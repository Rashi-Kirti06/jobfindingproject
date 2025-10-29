import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        id: {
            type: mongoose.Schema.Types.Object
        }
    }
})

export const application = mongoose.model("application", applicationSchema);