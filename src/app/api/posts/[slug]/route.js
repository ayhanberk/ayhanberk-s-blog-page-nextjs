import { connect2mongodb } from "@/lib/dbs/connect2mongodb"
import { Post } from "@/lib/models/models";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const { slug } = params;

    try {
        connect2mongodb();
        const post = await Post.findOne({ slug });

        return NextResponse.json(post)
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })
    }
}
export const DELETE = async (req, { params }) => {
    const { slug } = params;

    try {
        connect2mongodb();

        await Post.deleteOne({ slug });
        return NextResponse.json("Post Deleted")
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })
    }
}