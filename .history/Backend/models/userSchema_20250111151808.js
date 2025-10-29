import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { validate } from "node-cron";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Name must contain at least 3 characters."],
        maxLength: [30, "Name cannot exceed 30 characters."]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide valid email."]
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    niches: {
        firstNiche: String,
        secondNiche: String,
        thirdNiche: String,
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must contain at least 8 characters."],
        maxLength: [32, "Password "]
    },
    resume: {},
    coverLetter: {},
    role: {},
    createAt: {}
})