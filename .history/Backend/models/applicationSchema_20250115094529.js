import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeeker
})

export const application = mongoose.model("application", applicationSchema);