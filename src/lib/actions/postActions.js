"use server"
import { revalidatePath } from "next/cache";
import { connect2mongodb } from "../dbs/connect2mongodb"
import { Post } from "../models/models";
import RandomColor from "@/helpers/functions/randColor";
import UploadImage from "@/helpers/functions/uploadImage";



export const addPost = async (prevState, formData) => {
    const { title, body, slug, userId, img } = Object.fromEntries(formData)
    const imgName = await UploadImage(img, "uploads")
    if (!imgName.success) {
        return { error: imgName.error }
    }

    const emptyColor = RandomColor();
    try {
        connect2mongodb();
        const newPost = new Post({
            title,
            body,
            slug,
            img: imgName.filename || `https://placehold.co/600x400/${emptyColor}/${emptyColor}.png`,
            userId
        });
        await newPost.save();
        console.log("saved post to db")
        revalidatePath("/blog")
        revalidatePath("/admin")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!" }
    }

}
export const deletePost = async (formData) => {
    const { postId } = Object.fromEntries(formData)

    try {
        connect2mongodb();

        await Post.findByIdAndDelete(postId);
        console.log("deleted post")
        revalidatePath("/blog")
        revalidatePath("/admin")
        return { success: "Post deleted successfully" }
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!" }
    }

}