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
            type
        }
    }
})

export const application = mongoose.model("application", applicationSchema);