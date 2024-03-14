import mongoose from "mongoose";

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
