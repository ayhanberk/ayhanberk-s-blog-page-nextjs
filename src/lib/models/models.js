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


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true })

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],

    },
    email: {
        type: String,
        required: [true, 'Email is required'],

    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        min: [20, "minimum 20 characters required"],
        required: [true, 'Message is required'],
    },
}, { timestamps: true })


export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)


const commentSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
}, { timestamps: true })


export const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema)
