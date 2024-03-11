import { connect2mongodb } from "@/lib/dbs/connect2mongodb"
import { Post } from "@/lib/models/models";
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        connect2mongodb();
        const posts = await Post.find();

        return NextResponse.json(posts)
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })

    }
}