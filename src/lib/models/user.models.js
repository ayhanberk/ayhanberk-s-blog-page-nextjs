import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 25,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 55,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    user_avatar: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })


export const User = mongoose.models.User || mongoose.model("User", userSchema)