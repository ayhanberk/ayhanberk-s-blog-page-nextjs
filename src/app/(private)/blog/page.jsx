import PostCard from "@/components/posts/postCard/postCard"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data";


export const metadata = {
    title: "Blogs",
    description: "Ayhan Berk's About Page with nextjs",
}


const BlogPage = async () => {
    const posts = await getPosts();


    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.slug} >
                    <PostCard post={post} />
                </div>
            ))}
        </div >
    )
}

export default BlogPage
