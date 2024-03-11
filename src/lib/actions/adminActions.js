"use server"
import { revalidatePath } from "next/cache";
import { connect2mongodb } from "../dbs/connect2mongodb";
import { Post, User } from "../models/models";
import bcrypt from 'bcryptjs';
import RandomColor from "@/helpers/functions/randColor";
import UploadImage from "@/helpers/functions/uploadImage";

export const addUser = async (previousState, formData) => {
    const { username, email, password, avatar, isAdmin } = Object.fromEntries(formData);

    const avatarName = await UploadImage(avatar, "avatars");
    if (!avatarName.success) {
        return { error: avatarName.error }
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const emptyColor = RandomColor();

    try {
        connect2mongodb();
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            user_avatar: avatarName.filename || `https://placehold.co/600x400/${emptyColor}/${emptyColor}.png`,
            isAdmin,
        })

        await newUser.save();
        revalidatePath("/admin");
        return { success: "User created" }

    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!!!" };
    }
};
export const deleteUser = async (formData) => {
    const { userId } = Object.fromEntries(formData);

    try {
        connect2mongodb();

        await Post.deleteMany({ userId });
        await User.findByIdAndDelete(userId);
        revalidatePath("/blog");
        revalidatePath("/admin");

    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!!!" };
    }
};