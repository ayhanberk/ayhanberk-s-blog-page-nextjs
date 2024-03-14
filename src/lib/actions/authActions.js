"use server"
import RandomColor from "@/helpers/functions/randColor";
import { signIn, signOut } from "../auth";
import { connect2mongodb } from "../dbs/connect2mongodb";
import { User } from "../models/models";
import bcrypt from 'bcryptjs';
import UploadImage from "@/helpers/functions/uploadImage";

export const handleFormLogin = async () => {
    "use server"
    await signIn("github");
};

export const handleLogout = async () => {
    "use server"
    await signOut();
};

export const handleRegister = async (previousState, formData) => {
    const { username, email, password, passwordCheck, avatar } = Object.fromEntries(formData);
    if (password !== passwordCheck) {
        return { error: "Passwords must match" };
    }

    try {
        connect2mongodb();

        const user = await User.findOne({ username });
        if (user) {
            return { error: "Username already exists" };
        }

        const avatarName = await UploadImage(avatar, "avatars");

        if (!avatarName.success) {
            return { error: avatarName.error }
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const emptyColor = RandomColor();

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            // user_avatar: avatarName.filename || `https://placehold.co/600x400/${emptyColor}/${emptyColor}.png`,
            user_avatar: avatarName.url || `https://placehold.co/600x400/${emptyColor}/${emptyColor}.png`,
        })

        await newUser.save();
        console.log("new User Created...")
        return { success: "User created" }

    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!!!" };
    }

};

export const handleLogin = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password })
    } catch (err) {
        // console.log("error->", err);
        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
}
