import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {},
    email: {},
    phone: {},
    address: {},
    niches: {},
    password: {},
    resume: {},
    coverLetter: {},
    role: {},
    createAt
})