import { connect2mongodb } from "./dbs/connect2mongodb";
import { Post, User } from "./models/models";
import { unstable_noStore as noStore } from "next/cache";
// TEMPORARY DATA 
// const users = [
//     { id: 1, name: "John", },
//     { id: 2, name: "Jane", },
//     { id: 3, name: "Mary", },
// ]

// const posts = [
//     { id: 1, title: "Post 1", body: "lorem ipsum dolor sit amet, consectetur adip", userId: 1 },
//     { id: 2, title: "Post 2", body: "lorem ipsum dolor sit amet, consectetur adip", userId: 1 },
//     { id: 3, title: "Post 3", body: "lorem ipsum dolor sit amet, consectetur adip", userId: 2 },
//     { id: 4, title: "Post 4", body: "lorem ipsum dolor sit amet, consectetur adip", userId: 2 },
// ]

export const getPosts = async () => {
    try {
        connect2mongodb();
        const posts = await Post.find()
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to get posts")
    }
}

export const getPost = async (slug) => {
    try {
        connect2mongodb();
        const post = await Post.findOne({ slug })
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to get post")
    }
}

export const getUser = async (userId) => {
    noStore();
    try {
        connect2mongodb();
        const user = await User.findById(userId)
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to get user")
    }
}
export const getUsers = async () => {
    try {
        connect2mongodb();
        const users = await User.find()
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to get Users")
    }
}