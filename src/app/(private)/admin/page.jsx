import { Suspense } from "react"
import styles from "./admin.module.css"
import AdminPosts from "@/components/admin/adminPosts/adminPosts"
import AdminUser from "@/components/admin/adminUsers/adminUsers"
import AdminPostForm from "@/components/admin/adminPostForm/adminPostForm"
import AdminUserFrom from "@/components/admin/adminUserForm/adminUserForm"
import { auth } from "@/lib/auth"

const AdminPage = async () => {

    const session = await auth();


    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading....</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminPostForm userId={session.user.id} />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col}>
                    <AdminUserFrom />
                </div>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading....</div>}>
                        <AdminUser />
                    </Suspense>
                </div>

            </div>
        </div>
    )
}

export default AdminPage
