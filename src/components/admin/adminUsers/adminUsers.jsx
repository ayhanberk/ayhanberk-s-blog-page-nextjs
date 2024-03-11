import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css"
import Image from "next/image";
import { deleteUser } from "@/lib/actions/adminActions";


const AdminUser = async () => {
    const users = await getUsers();

    return (
        <div className={styles.container}>
            <h1>USERS</h1>
            {users?.map(user => (
                <div className={styles.user} key={user.username}>
                    <div className={styles.detail}>
                        <Image src={user.user_avatar || "https://placehold.co/600x400/lightGray/black.png?text=noAvatar"} alt="" width={50} height={50} />
                        <span className={styles.title}>{user.username}</span>
                        <span className={styles.title}>{user.email}</span>
                    </div>
                    <div>
                        <form action={deleteUser}>
                            <input type="hidden" name="userId" value={user.id} />
                            <button className={styles.deleteBTN}><span>Delete</span></button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminUser
