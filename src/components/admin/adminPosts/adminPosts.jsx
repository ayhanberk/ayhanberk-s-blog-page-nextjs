import Image from "next/image";
import styles from "./adminPosts.module.css"
import { deletePost } from "@/lib/actions/postActions";
import { getPosts } from "@/lib/data";


const AdminPosts = async () => {
    const posts = await getPosts();


    return (
        <div className={styles.container}>
            <h1>POSTS</h1>
            {posts?.map(post => (
                <div className={styles.post} key={post.id}>
                    <div className={styles.detail}>
                        <Image src={post.img} alt="" width={50} height={50} />
                        <span className={styles.title}>{post.title}</span>
                    </div>
                    <div>
                        <form action={deletePost}>
                            <input type="hidden" name="postId" value={post.id} />
                            <button className={styles.deleteBTN}><span>Delete</span></button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminPosts
