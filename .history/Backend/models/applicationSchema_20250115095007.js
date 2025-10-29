import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate: [validator.isEmail, "Please provide a valid email."]
        },
        phone: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        resume: {
            public_id: String,
            url: String,
            required: true
        },
        coverLetter: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: []
            required: true
        }
    }
})

export const application = mongoose.model("application", applicationSchema);