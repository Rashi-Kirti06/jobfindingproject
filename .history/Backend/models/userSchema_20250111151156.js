import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        typeof: String,
        required: true,
        minL
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