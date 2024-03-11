import Image from "next/image"
import styles from "./singlepost.module.css"
import PostUser from "@/components/posts/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";


export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.body
    }
}

const SinglePostPage = async ({ params }) => {
    const { slug } = params;

    const post = await getPost(slug);
    // const post = await getSinglePostFromAPI(params.slug);


    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={post.img || "https://placehold.co/2048.png"} alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (<Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>)}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(0, 10)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage
