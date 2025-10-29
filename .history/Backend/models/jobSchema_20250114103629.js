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
    companyName: {
        type: String,
        required: true,
    },
    introduction: {
        type: String
    },
    responsibility: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    offers: {
        type: String
    },
    Salary: {
        type: String,
        required: true
    },
    hiringMultipleCandidates: {
        type: String,
        default: "No",
        enum: ["Yes", "No"]
    },
    personalWebsite: {
        type: String,
        required: true
    },
    jobNiche : {
        type: 
    }
})