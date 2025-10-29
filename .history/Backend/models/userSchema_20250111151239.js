import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        typeof: String,
        required: true,
        minLength: [3, "Name must contain at least 3 characters."],
        maxLength: [30, "Name "]
    },
    email: {},
    phone: {},
    address: {},
    niches: {},
    password: {},
    resume: {},
    coverLetter: {},
    role: {},
    createAt: {}
})