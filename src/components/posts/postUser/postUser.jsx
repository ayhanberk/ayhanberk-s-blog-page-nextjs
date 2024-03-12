import Image from "next/image"
import styles from "./postUser.module.css"
import { getUser } from "@/lib/data"

const PostUser = async ({ userId }) => {

    const user = await getUser(userId);
    console.log(user)
    return (
        <div className={styles.container}>
            <Image
                className={styles.avatar}
                src={user.user_avatar}
                alt="avatar"
                width={50}
                height={50} />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser
