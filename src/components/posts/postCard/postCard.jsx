import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link";


const PostCard = ({ post }) => {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link href={`/blog/${post.slug}`} className={styles.imgContainer}>
                    <Image src={post.img} alt="blog-post" fill className={styles.img} sizes="100%" />
                </Link>
                <span className={styles.date}>{post.createdAt.toString().slice(0, 10)}</span>
            </div>
            <div className={styles.bottom}>
                <Link href={`/blog/${post.slug}`} >
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.desc}>{post.body}</p>
                </Link>
                <Link className={styles.link} href={`/blog/${post.slug}`} >...Read More</Link>
            </div>
        </div>
    )
}

export default PostCard
