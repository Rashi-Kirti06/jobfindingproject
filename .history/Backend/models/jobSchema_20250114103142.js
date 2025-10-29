import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true,
        enum: ["Full-time", "Part-time"]
    },
    location: {
        type: String,
        required: true,
    },
    company
})