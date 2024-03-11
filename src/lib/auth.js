import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import { connect2mongodb } from "./dbs/connect2mongodb";
import { User } from "./models/models";
import bcrypt from 'bcryptjs';
import credentialsProvider from "next-auth/providers/credentials";
import { v4 as uuidv4 } from "uuid"
import { authConfig } from "@/lib/auth.config"


const login = async (credentials) => {

    try {
        connect2mongodb();
        const user = await User.findOne({ username: credentials.username })
        if (!user) {
            // return { error: "User not found" }
            throw new Error("Wrong credentials!");
        }

        const passwordControl = await bcrypt.compare(credentials.password, user.password);

        if (!passwordControl) {
            // return { error: "User or Password Wrong!" }
            throw new Error("Wrong credentials!");
        }
        return user;
    } catch (err) {
        // return { error: "Failed to Login!" };
        throw new Error("Failed to Login!")
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    ...authConfig,
    trustHost: true,
    providers: [
        github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        credentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user;
                } catch (error) {
                    return null
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === 'github') {
                connect2mongodb();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const salt = await bcrypt.genSalt(10);
                        const hashedPassword = await bcrypt.hash(uuidv4(), salt);
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            password: hashedPassword,
                            user_avatar: profile.avatar_url,
                        });

                        await newUser.save();
                    }
                } catch (error) {
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    },
});