import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        typeof
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